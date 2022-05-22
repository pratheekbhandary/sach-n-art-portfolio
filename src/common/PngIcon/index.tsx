import { PngIconProps } from "../types";

export const PngIcon = ({ src, width, height }: PngIconProps) => (
  <img src={`/img/icons/${src}`} alt={src} width={width} height={height} />
);
