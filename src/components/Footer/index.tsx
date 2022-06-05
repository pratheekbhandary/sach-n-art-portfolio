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

import SocialMediaHandles from "./SocialMediaHandles";
import useFetchArifacts from "../../common/utils/useFetchArtifacts";

const Footer = ({ t }: any) => {
  const { artifacts, loading } = useFetchArifacts();
  if (loading) return null;

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
              <a href={`mailto:${artifacts.email}`}>
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
