import COLOR from "../../constants/colors";

const styles = {
  logo: {
    float: "left",
    height: 64,
    display: "flex",
  },
  title: {
    fontSize: "2rem",
    fontWeight: 500,
    color: COLOR.white,
  },
  right: {
    float: "right",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fixedHeader: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
  },
  whiteBackground: {
    background: COLOR.white,
  },
};

export default styles;
