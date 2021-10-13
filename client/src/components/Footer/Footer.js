import React from "react";
import { Typography } from "antd";
import { Box, Container, Row, Column, FooterLink, Heading } from "./styles";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/all";

const { Text } = Typography;

function Footer() {
  return (
    <Box>
      <Container>
        <div className="col-lg-6 mb-4">
          <FooterLink href="#">이용약관</FooterLink>
          <FooterLink href="#">개인정보처리방침</FooterLink>
          <FooterLink href="#">고객센터</FooterLink>
          <div style={{ height: 50 }} />
          <Text style={{ fontSize: 12 }}>
            (주) 가드시그니처 대표자 : 홍길 사업자 등록번호 : 356-00-00000
          </Text>
          <br />
          <Text style={{ fontSize: 12 }}>
            이메일 : test0101@guardsignature.co.k FAX : 070-0000-0000
          </Text>
          <br />
          <Text style={{ fontSize: 12 }} c>
            서울특별시 강남구 도산대로 8길 17 3층
          </Text>
          <div style={{ height: 50 }} />
          <Text style={{ fontSize: 12 }}>
            Copyright© GUARDSIGNATURE All rights reserved
          </Text>
          <div style={{ height: 50 }} />
        </div>
      </Container>
    </Box>
  );
}

export default Footer;
