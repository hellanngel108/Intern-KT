import React from "react";
import { Link } from "react-router-dom";
import { Layout, Typography, Row, Menu, Dropdown, Tooltip } from "antd";
import styles from "./styles";
import { EllipsisOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

import COLOR from "../../constants/colors";

const { Header } = Layout;
const { Text } = Typography;

function Navbar() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1042px)" }); // return true if right size

  const MainMenuItems = () => {
    return (
      <Menu
        style={styles.whiteBackground}
        theme="dark"
        mode={!isSmallScreen ? "horizontal" : "vertical"}
      >
        <Menu.Item className="navitem pickitem text-center">
          <Tooltip placement="bottom">
            <Text>로그인</Text>
          </Tooltip>
        </Menu.Item>

        <Menu.Item className="navitem notpickitem text-center">
          <Dropdown trigger={["click"]} placement="bottomRight">
            <Tooltip placement="bottom">
              <Text>회원가입</Text>
            </Tooltip>
          </Dropdown>
        </Menu.Item>
      </Menu>
    );
  };

  const menuMore = (
    <Menu>
      <Menu.Item key="settings">
        <Row align="middle">
          <Text>서비스 소개</Text>
        </Row>
      </Menu.Item>
      <Menu.Item key="createGroup">
        <Row align="middle">
          <Text>법적효력·보안</Text>
        </Row>
      </Menu.Item>
      <Menu.Item key="createGroup">
        <Row align="middle">
          <Text>활용 분야</Text>
        </Row>
      </Menu.Item>
      <Menu.Item key="createGroup">
        <Row align="middle">
          <Text>이용 혜택</Text>
        </Row>
      </Menu.Item>
      <Menu.Item key="createGroup">
        <Row align="middle">
          <Text>요금 안내</Text>
        </Row>
      </Menu.Item>
      <Menu.Item key="createGroup">
        <Row align="middle">
          <Text>고객센터</Text>
        </Row>
      </Menu.Item>

      {isSmallScreen && <MainMenuItems />}
    </Menu>
  );

  return (
    <Header
      style={{
        ...styles.whiteBackground,
        ...styles.fixedHeader,
      }}
    >
      <Row className="align-items-center justify-content-between">
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ width: isSmallScreen ? "50%" : "80%" }}
        >
          <div style={styles.logo}>
            <Link to="/">
              <Text
                style={{
                  fontWeight: "bolder",
                  fontSize: isSmallScreen ? 14 : 14,
                  color: COLOR.blue,
                  marginLeft: isSmallScreen ? 0 : 100,
                  marginRight: isSmallScreen ? 0 : 100,
                }}
              >
                GUARD SIGNATURE
              </Text>
            </Link>
          </div>
          {!isSmallScreen && (
            <>
              <Link to="/">
                <Text>서비스 소개</Text>
              </Link>
              <Link to="/">
                <Text>법적효력·보안</Text>
              </Link>
              <Link to="/">
                <Text>활용 분야</Text>
              </Link>
              <Link to="/">
                <Text>이용 혜택</Text>
              </Link>
              <Link to="/">
                <Text>요금 안내</Text>
              </Link>
              <Link to="/">
                <Text>고객센터</Text>
              </Link>
            </>
          )}
        </div>
        <div className="d-flex">
          {!isSmallScreen && <MainMenuItems />}
          {isSmallScreen ? (
            <Menu theme="dark" mode="horizontal" style={styles.whiteBackground}>
              <Dropdown
                overlay={menuMore}
                trigger={["click"]}
                placement="bottomCenter"
              >
                <EllipsisOutlined
                  style={{ fontSize: 24, color: COLOR.blue, marginRight: 20 }}
                />
              </Dropdown>
            </Menu>
          ) : (
            <></>
          )}
        </div>
      </Row>
    </Header>
  );
}

export default Navbar;
