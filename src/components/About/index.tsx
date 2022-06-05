import React from "react";
import MiddleBlock from "../MiddleBlock";
import _artifactJson from "../../content/artifacts.json";
import { ArtifactsType } from "../../content/artifacts.model";
import { AboutDescription } from "./style";

const artifacts = _artifactJson as ArtifactsType;

const About = () => {
  return (
    <div id="about">
      <MiddleBlock
        title={artifacts.about.name}
        content={
          <AboutDescription>
            <img src={artifacts.about.profilePic} alt="Sachin" />
            <div>{artifacts.about.description}</div>
          </AboutDescription>
        }
      />
    </div>
  );
};

export default About;
