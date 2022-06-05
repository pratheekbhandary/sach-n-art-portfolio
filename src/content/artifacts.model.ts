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
    artstation: string;
    twitter: string;
    linkedin: string;
    facebook: string;
    instagram: string;
  };
}
