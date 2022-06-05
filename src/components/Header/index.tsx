import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { PngIcon } from "../../common/PngIcon";
import { Button } from "../../common/Button";
import artifactJson from "../../content/artifacts.json";

import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  LogoSubText,
  VerticalFixedContainer,
} from "./styles";
import SocialMediaHandles from "../Footer/SocialMediaHandles";
import { useHistory } from "react-router-dom";

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const history = useHistory();

    const scrollTo = (id: string) => {
      history.push(`/`);
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <CustomNavLinkSmall
          href={artifactJson.resumeLink}
          download="Sachin_resume"
          target="_blank"
        >
          <Span>Resume</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <Span>{t("About")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("contact")}
        >
          <Span>
            <Button>{t("Contact")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection id="intro">
      <Container>
        <VerticalFixedContainer>
          <SocialMediaHandles orientation="column" />
        </VerticalFixedContainer>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <PngIcon src="logo-portfolio.png" width="100px" height="64px" />
            <LogoSubText>Visual development</LogoSubText>
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
