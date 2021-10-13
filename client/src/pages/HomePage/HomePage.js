import React from "react";
import { Layout, Typography } from "antd";
import { useMobile } from "../../utils/responsiveQuery";
import bg from "../../assets/banner-img-2.png";
import image1 from "../../assets/service-01-img.jpg";
import COLOR from "../../constants/colors.js";
import "./styles.css";
import { RightCircleFilled } from "@ant-design/icons";
import Navbar from "../../components/NavBar/NavBar.js";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
const { Content } = Layout;

const { Title, Text } = Typography;
function HomePage() {
  const isMobile = useMobile();
  return (
    <>
      <Layout>
        <Navbar />
        {/* Layout1 */}
        <div className="main" style={{ marginTop: 64, alignItems: "center" }}>
          <div className="row" style={{ marginBottom: isMobile ? 0 : 70 }}>
            <img
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                width: isMobile ? 400 : "100%",
              }}
              alt="bg-home"
              src={bg}
            />
            <div
              className="col-lg-6 align-items-center justify-content-center"
              style={{ marginTop: isMobile ? 20 : 100 }}
            >
              <Text
                style={{
                  fontSize: isMobile ? 14 : 36,
                  fontWeight: "bolder",
                  marginBottom: 0,
                  padding: 0,
                  paddingLeft: isMobile ? 64 : 0,
                  color: COLOR.white,
                }}
              >
                모든 계약을 쉽고
              </Text>
              <br />

              <Text
                style={{
                  fontSize: isMobile ? 14 : 36,
                  fontWeight: "bolder",
                  marginBottom: 0,
                  padding: 0,
                  paddingLeft: isMobile ? 64 : 0,
                  color: COLOR.white,
                }}
              >
                간단하게, 빠르게 처리하세요.
              </Text>
              <div
                style={{
                  marginTop: isMobile ? 0 : 20,
                }}
              ></div>
              {isMobile ? (
                <div></div>
              ) : (
                <div>
                  <Text
                    style={{
                      fontSize: isMobile ? 4 : 12,
                      padding: 0,
                      marginBottom: 0,
                      paddingLeft: isMobile ? 64 : 0,
                      color: COLOR.white,
                    }}
                  >
                    가드 시그니처를 이용하면 어떤 계약이든
                  </Text>
                  <br />
                  <Text
                    style={{
                      fontSize: isMobile ? 4 : 12,
                      padding: 0,
                      marginBottom: 0,
                      paddingLeft: isMobile ? 64 : 0,
                      color: COLOR.white,
                    }}
                  >
                    복잡한 과정없이 간편하고 손쉽게 처리할 수 있고,
                  </Text>
                  <br />
                  <Text
                    style={{
                      fontSize: isMobile ? 4 : 12,
                      padding: 0,
                      paddingLeft: isMobile ? 64 : 0,
                      color: COLOR.white,
                    }}
                  >
                    문서 처리 및 관리까지 편리하게 이용할 수 있습니다.
                  </Text>
                </div>
              )}
              <br />
              <div className="md-4" style={{ marginTop: isMobile ? 0 : 70 }}>
                <Link to="/">
                  <Text
                    style={{
                      fontSize: isMobile ? 6 : 12,
                      paddingLeft: isMobile ? 64 : 0,
                      color: COLOR.white,
                    }}
                  >
                    지금 확인하기
                  </Text>
                  <RightCircleFilled
                    style={{
                      fontSize: isMobile ? 15 : 30,
                      color: COLOR.white,
                      marginLeft: 15,
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Layout 2 */}
        <div
          style={{
            marginTop: isMobile ? 15 : 20,
            alignItems: "center",
            textAlign: "center",
            backgroundColor: COLOR.white,
          }}
        >
          <br />
          <br />
          <br />
          <Text strong style={{ fontSize: isMobile ? 20 : 40 }}>
            간단하게 끝내는 계약과정
          </Text>
          <br />
          <br />
          <Text style={{ fontSize: isMobile ? 9 : 18 }}>
            계약서 파일을 업로드하여 서명을 요청해 보세요.
          </Text>
          <br />
          <Text style={{ fontSize: isMobile ? 9 : 18 }}>
            상대방은 회원가입 없이 이메일, 카카오톡 링크를 통해 서명할 수
            있습니다
          </Text>
          <br />
          <Text style={{ fontSize: isMobile ? 9 : 18 }}>
            언제 어디서든 5분만에 계약을 체결해 보세요.
          </Text>
          <br />
          <br />
          <br />
          <br />
        </div>
        {/* Layout3 */}
        <div
          style={{
            alignItems: "center",
            textAlign: "center",
            backgroundColor: COLOR.grayBG,
          }}
        >
          <br />
          <br />
          <br />
          <Text
            strong
            style={{ fontSize: isMobile ? 9 : 18, color: COLOR.blue }}
          >
            지금 바로 시작하세요!
          </Text>
          <br />
          <br />
          <Text style={{ fontSize: isMobile ? 20 : 40, fontWeight: "bolder" }}>
            설명이 필요 없는 간단한 계약 과정,
          </Text>
          <br />
          <Text style={{ fontSize: isMobile ? 20 : 40, fontWeight: "bolder" }}>
            직접 경험해보세요!
          </Text>
          <br />
          <br />
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col"></div>
            <div
              className="col-auto "
              style={{
                alignItems: "center",
                width: isMobile ? 90 : 218,
                height: isMobile ? 20 : 40,
                backgroundColor: COLOR.blue,
                borderRadius: 25,
              }}
            >
              <Text
                style={{
                  fontSize: isMobile ? 8 : 16,
                }}
              >
                더 살펴보기
              </Text>
            </div>
            <div className="col "></div>
          </div>
          <br />
          <br />
          <br />
        </div>
        {/* Layout 4 */}
        <div style={{ alignItems: "center" }}>
          <div
            className="row"
            style={{
              alignItems: "center",
              marginBottom: 100,
              backgroundColor: COLOR.white,
            }}
          >
            <div className="col-lg-6 mb-4">
              <div>
                <div
                  style={{
                    display: "flex",
                    height: isMobile ? 180 : 500,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    style={{
                      height: "100%",
                      padding: isMobile ? 10 : 60,
                      paddingRight: 0,
                    }}
                    alt="bg-group"
                    src={image1}
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 offset-1"
              style={{ paddingLeft: isMobile ? 60 : 0 }}
            >
              <Text strong style={{ fontSize: 16, color: COLOR.blue }}>
                FIRST
              </Text>
              <div style={{ height: 16 }} />
              <Text strong style={{ fontSize: isMobile ? 20 : 40 }}>
                한 눈에 확인하는
              </Text>
              <br />
              <Text strong style={{ fontSize: isMobile ? 20 : 40 }}>
                계약 상태
              </Text>
              <div style={{ height: 16 }} />
              <Text style={{ fontSize: isMobile ? 9 : 18 }}>
                계약이 진행되는 모든 과정을 실시간으로 추적해보세요.
              </Text>
              <br />
              <Text style={{ fontSize: isMobile ? 9 : 18 }}>
                진행 상태에 따라 내 서명 필요, 서명 대기중, 서명 완료,
              </Text>
              <br />
              <Text style={{ fontSize: isMobile ? 9 : 18 }}>
                취소, 거절 등이 조회됩니다. 상태 필터 기능을 통해 상태별로
              </Text>
              <br />
              <Text style={{ fontSize: isMobile ? 9 : 18 }}>
                문서를 나열하고 관리할 수도 있습니다.
              </Text>
              <br />
              <br />
            </div>
          </div>
        </div>
        {!isMobile ? <Footer /> : null}
      </Layout>
    </>
  );
}

export default HomePage;
