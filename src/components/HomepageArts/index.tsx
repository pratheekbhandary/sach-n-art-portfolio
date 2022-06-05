import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import _artifactJson from "../../content/artifacts.json";
import { ArtifactsType } from "../../content/artifacts.model";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { Pill, PillContainer, StyledImageListItem } from "./styles";
import { useMediaQuery } from "@mui/material";

const artifacts = _artifactJson as ArtifactsType;

export default function HomepageArts() {
  const matches = useMediaQuery("(min-width:600px)");
  const uniqueTypes = React.useMemo(
    () => Array.from(new Set(artifacts.projects.map((p) => p.type))),
    []
  );
  const allType = "All";
  const [selectedType, setSelectedType] = React.useState<string>(allType);

  const selectedProject = React.useMemo(
    () =>
      selectedType === allType
        ? artifacts.projects
        : artifacts.projects.filter((p) => p.type === selectedType),
    [selectedType]
  );
  return (
    <>
      <PillContainer>
        {[allType, ...uniqueTypes].map((type) => (
          <Pill
            $selected={selectedType === type}
            onClick={() => {
              setSelectedType(type);
            }}
          >
            {type}
          </Pill>
        ))}
      </PillContainer>
      <ImageList cols={matches ? 2 : 1}>
        {selectedProject.map((item, index) => (
          <Fade>
            <Link to={`/arts/${index}`}>
              <StyledImageListItem key={item.name}>
                <img
                  src={item.thumbnail}
                  srcSet={item.thumbnail}
                  alt={item.name}
                  loading="lazy"
                />
                <ImageListItemBar title={item.name} />
              </StyledImageListItem>
            </Link>
          </Fade>
        ))}
      </ImageList>
    </>
  );
}
