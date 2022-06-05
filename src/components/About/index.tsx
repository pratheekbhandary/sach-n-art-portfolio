import React from "react";
import MiddleBlock from "../MiddleBlock";
import { AboutDescription } from "./style";
import useFetchArifacts from "../../common/utils/useFetchArtifacts";

const About = () => {
  const { artifacts, loading } = useFetchArifacts();
  if (loading) return null;

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
