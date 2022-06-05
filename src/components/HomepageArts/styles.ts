import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImageListItem } from "@mui/material";

export const LogoContainer = styled(Link)`
  &:hover {
    cursor: pointer;
  }
`;

export const StyledImageListItem = styled(ImageListItem)`
  img:hover {
    transform: scale(1.05);
    transition: transform 0.5s ease-in-out;
  }
  overflow: hidden;
`;
