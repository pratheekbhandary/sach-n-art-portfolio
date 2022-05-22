import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
// import ImageListItemBar from "@mui/material/ImageListItemBar";

import _artifactJson from "../../content/artifacts.json";
import { ArtifactsType } from "../../content/artifacts.model";
import { Fade } from "react-awesome-reveal";
import { useParams } from "react-router-dom";

const artifacts = _artifactJson as ArtifactsType;

export default function HomepageArts() {
  let { slug } = useParams<{ slug: string }>();
  const project = artifacts.projects[Number(slug)];

  return (
    <ImageList cols={1}>
      {project.allArtworks.map((item, i) => (
        <Fade>
          <ImageListItem key={i}>
            <img src={item} srcSet={item} alt={`artwork ${i}`} loading="lazy" />
            {/* <ImageListItemBar title={item.name} /> */}
          </ImageListItem>
        </Fade>
      ))}
    </ImageList>
  );
}
