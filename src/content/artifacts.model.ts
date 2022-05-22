export interface ArtifactsType {
  portfolio: string;
  projects: {
    thumbnail: string;
    name: string;
    description: string;
    pdfLink: string;
    wallpaper: string;
    type: string;
    allArtworks: string[];
  }[];
  socialMediaHandles: {
    github: string;
    twitter: string;
    linkedin: string;
    medium: string;
  };
}
