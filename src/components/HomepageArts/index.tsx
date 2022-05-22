import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import _artifactJson from "../../content/artifacts.json";
import { ArtifactsType } from "../../content/artifacts.model";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const artifacts = _artifactJson as ArtifactsType;

export default function HomepageArts() {
  return (
    <ImageList cols={1}>
      {artifacts.projects.map((item, index) => (
        <Fade>
          <Link to={`/arts/${index}`}>
            <ImageListItem key={item.name}>
              <img
                src={item.thumbnail}
                srcSet={item.thumbnail}
                alt={item.name}
                loading="lazy"
              />
              <ImageListItemBar title={item.name} />
            </ImageListItem>
          </Link>
        </Fade>
      ))}
    </ImageList>
  );
}
