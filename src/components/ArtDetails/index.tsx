import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
// import ImageListItemBar from "@mui/material/ImageListItemBar";

import { Fade } from "react-awesome-reveal";
import { useParams } from "react-router-dom";
import useFetchArifacts from "../../common/utils/useFetchArtifacts";

export default function HomepageArts() {
  let { slug } = useParams<{ slug: string }>();
  const { artifacts, loading } = useFetchArifacts();

  const project = artifacts.projects[Number(slug)];

  if (loading) return null;
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
