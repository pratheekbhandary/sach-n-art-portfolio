import { withTranslation } from "react-i18next";
import Container from "../../common/Container";

import {
  FooterSection,
  Para,
  Chat,
  Language,
  ContactUsContainerCol,
  FooterContainerRow,
} from "./styles";

import _artifactJson from "../../content/artifacts.json";
import { ArtifactsType } from "../../content/artifacts.model";
import SocialMediaHandles from "./SocialMediaHandles";

const Footer = ({ t }: any) => {
  return (
    <>
      <FooterSection>
        <Container>
          <FooterContainerRow justify="space-between">
            <ContactUsContainerCol xs={24} md={12}>
              <Language>{t("Contact")}</Language>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:l.qqbadze@gmail.com">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </ContactUsContainerCol>
            <SocialMediaHandles />
          </FooterContainerRow>
        </Container>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);
