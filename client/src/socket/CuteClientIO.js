import io, { Socket } from "socket.io-client";

/**
 * [Full documentation](https://www.google.com)
 */
export default class CuteClientIO {
  /**
   * @type Socket<DefaultEventsMap, DefaultEventsMap>?
   */
  #socket = null;

  /**
   * @deprecated Just in case you really need to access the real socket.io's API, I provide this to you. But try to use the supported methods or contact CuteTN first, thank you.
   */
  get socket() {
    return this.#socket;
  }

  /** @type string */
  #socketId = null;

  get socketId() {
    return this.#socketId;
  }

  #uri = null;
  #token = null;
  #browserId = null;

  /**
   * this is to store a list of event handlers in case you might try to subscribe onReceive to socket before connection :)
   * @type [{event: string, handleFunction: OnReceiveDelegate}]
   */
  #queueEventHandlersOnConnection = [];
  #queueAnyEventHandlersOnConnection = [];

  /**
   * set socket with new serverUri and token and connect to server
   * @param {string} serverUri The address of the server.
   * @param {string} token
   * @returns {CuteClientIO}
   */
  connect = (serverUri, token) => {
    if (serverUri === this.#uri && token === this.#token) return this;

    this.#uri = serverUri;
    this.#token = token;
    this.#browserId = JSON.parse(localStorage.getItem("browser"))?.id;

    this.close();

    const query = {
      token: this.#token
    };
    if (this.#browserId)
      query.browserId = this.#browserId;

    this.#socket = io(this.#uri, { query });

    this.#socket.on("connect", () => {
      this.#socketId = this.#socket.id;
      console.info(
        `[IO] Connected to ${this.#socketId} at ${this.#uri}`
      );

      this.socket.once("System-AcceptBrowserId", (msg) => {
        // DANGER: async accross tabs here

        // fetch again to ensure the last update...
        this.#browserId = JSON.parse(localStorage.getItem("browser"))?.id;

        // if the browser is not yet assigned an ID, then do it and reconnect
        if (!this.#browserId) {
          localStorage.setItem("browser", JSON.stringify({ id: msg.browserId }));
          this.connect(serverUri, token);
          return;
        }

        // if there's a conflict between the browser's current ID and the one assign by server, reconnect
        if (this.#browserId !== msg.browserId) {
          this.connect(serverUri, token);
          return;
        }
      })

      this.onReceiveMulti(this.#queueEventHandlersOnConnection);
      this.#queueEventHandlersOnConnection = [];

      this.#queueAnyEventHandlersOnConnection.forEach(h => this.onReceiveAny(h));
      this.#queueAnyEventHandlersOnConnection = [];

      this.#socket.on("disconnect", (reason) => {
        console.info(
          `[IO] Disconnected from ${this.#socketId}. Reason: ${reason}`
        );
      });
    });

    return this;
  };

  /** stop connection to server */
  close = () => {
    this.#socket?.close();
    return this;
  };

  /**
   *
   * @param {string} event
   * @param {any} msg
   */
  send = (event, msg) => {
    this.#socket?.emit(event, msg);
  };

  /**
   * @param {string} event
   * @param {OnReceiveDelegate} handleFunction
   */
  onReceive = (event, handleFunction) => {
    if (this.#socket) this.#socket.on(event, handleFunction);
    else this.#queueEventHandlersOnConnection.push({ event, handleFunction });

    return () => this.stopReceive(event, handleFunction);
  };

  /**
   * @param {OnReceiveAnyDelegate} handleFunction
   */
  onReceiveAny = (handleFunction) => {
    if (this.#socket) this.#socket.onAny(handleFunction);
    else this.#queueAnyEventHandlersOnConnection.push(handleFunction)

    return () => this.stopReceiveAny(handleFunction);
  }

  /**
   * Add multiple event handlers at once because you'll need it :)
   * @param {[{event: string, handleFunction: OnReceiveDelegate}]} eventHandlers
   */
  onReceiveMulti = (eventHandlers) => {
    eventHandlers.forEach((e) => this.onReceive(e.event, e.handleFunction));

    return () => this.stopReceiveMulti(eventHandlers);
  };

  /**
   * @param {string} event
   * @param {OnReceiveDelegate} handleFunction
   */
  stopReceive = (event, handleFunction) => {
    this.#socket?.off(event, handleFunction);
  };


  /**
   * @param {OnReceiveAnyDelegate} handleFunction 
   */
  stopReceiveAny = (handleFunction) => {
    this.#socket.offAny(handleFunction);
  }


  /**
   * Stop multiple event handlers at once because you'll need it :)
   * @param {[{event: string, handleFunction: OnReceiveDelegate}]} eventHandlers
   */
  stopReceiveMulti = (eventHandlers) => {
    eventHandlers.forEach((e) => this.stopReceive(e.event, e.handleFunction));
  };
}

//#region typedefs
////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * A kind of function to handle any messages that are emitted from the clients
 * @callback OnReceiveDelegate
 * @param {any} msg
 * @returns {any}
 */

/**
 * A kind of function to handle any messages that are emitted from the clients
 * @callback OnReceiveAnyDelegate
 * @param {string} event
 * @param {any} msg
 * @returns {any}
 */

//#endregion
