import { useEffect, useState } from "react";
import _artifactJson from "../../content/artifacts.json";
import { ArtifactsType } from "../../content/artifacts.model";

const artifacts = _artifactJson as ArtifactsType;

const useFetchArifacts = () => {
  const [loading, setLoading] = useState(true);
  /** Load local artifacts by default */
  const [artifactJson, setArtifactJson] = useState<ArtifactsType>(artifacts);
  useEffect(() => {
    fetch(
      "https://res.cloudinary.com/sachnart/raw/upload/v1654461159/DO%20NOT%20DELETE/artifacts_yehu3g.json"
    )
      .then(async (res) => {
        const resJson = await res.json();
        console.log("Checkout this JSON! ", resJson);
        setArtifactJson(resJson as unknown as ArtifactsType);
        setLoading(false);
      })
      .catch((err) => console.error("Failed to fetch cloudinary json", err));
  }, []);

  return {
    loading,
    artifacts: artifactJson,
  };
};

export default useFetchArifacts;
