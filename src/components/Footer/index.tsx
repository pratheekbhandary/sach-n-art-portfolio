import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Para,
  Chat,
  Language,
  SocialContainer,
  ContactUsContainerCol,
  FooterContainerRow,
} from "./styles";

import _artifactJson from "../../content/artifacts.json";
import { ArtifactsType } from "../../content/artifacts.model";

const artifacts = _artifactJson as ArtifactsType;

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

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
            <SocialContainer xs={24} md={12}>
              <SocialLink
                href={artifacts.socialMediaHandles.github}
                src="github.svg"
              />
              <SocialLink
                href={artifacts.socialMediaHandles.twitter}
                src="twitter.svg"
              />
              <SocialLink
                href={artifacts.socialMediaHandles.linkedin}
                src="linkedin.svg"
              />
              <SocialLink
                href={artifacts.socialMediaHandles.medium}
                src="medium.svg"
              />
            </SocialContainer>
          </FooterContainerRow>
        </Container>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);
