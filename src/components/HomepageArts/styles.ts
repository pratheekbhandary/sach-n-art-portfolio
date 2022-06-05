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

export const PillContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  flex-wrap: wrap;
`;

export const Pill = styled.div<{ $selected?: boolean }>`
  background-color: ${({ $selected }) => {
    return $selected ? "rgb(255, 130, 92)" : "#2E186A";
  }};
  color: ${({ $selected }) => (!$selected ? "rgb(255, 130, 92)" : "#2E186A")};
  padding: 5px 20px;
  border-radius: 25px;
  margin: 10px;
  cursor: pointer;
  font-weight: bold;
`;
