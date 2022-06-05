import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import _artifactJson from "../../content/artifacts.json";
import { ArtifactsType } from "../../content/artifacts.model";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { StyledImageListItem } from "./styles";

const artifacts = _artifactJson as ArtifactsType;

export default function HomepageArts() {
  return (
    <ImageList cols={2}>
      {artifacts.projects.map((item, index) => (
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
  );
}
