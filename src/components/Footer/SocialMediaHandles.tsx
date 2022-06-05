import React from "react";
import { SocialContainer } from "./styles";
import _artifactJson from "../../content/artifacts.json";
import { ArtifactsType } from "../../content/artifacts.model";
import { SvgIcon } from "../../common/SvgIcon";

const artifacts = _artifactJson as ArtifactsType;

interface SocialLinkProps {
  href: string;
  src: string;
}
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

interface ISocialMediaHandlesProps {
  orientation?: "row" | "column";
}

const SocialMediaHandles: React.FC<ISocialMediaHandlesProps> = ({
  orientation = "row",
}) => {
  return (
    <SocialContainer xs={24} md={12} $orientation={orientation}>
      <SocialLink
        href={artifacts.socialMediaHandles.artstation}
        src="artstation.svg"
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
        href={artifacts.socialMediaHandles.facebook}
        src="facebook.svg"
      />
      <SocialLink
        href={artifacts.socialMediaHandles.instagram}
        src="instagram.svg"
      />
    </SocialContainer>
  );
};

export default SocialMediaHandles;
