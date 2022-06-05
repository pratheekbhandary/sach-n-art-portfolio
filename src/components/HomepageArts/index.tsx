import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import _artifactJson from "../../content/artifacts.json";
import { ArtifactsType } from "../../content/artifacts.model";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { StyledImageListItem } from "./styles";
import { useMediaQuery } from "@mui/material";

const artifacts = _artifactJson as ArtifactsType;

export default function HomepageArts() {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <ImageList cols={matches ? 2 : 1}>
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
