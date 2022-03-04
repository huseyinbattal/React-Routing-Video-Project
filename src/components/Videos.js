import React from "react";
import { useParams } from "react-router-dom";

const VIDEOS = {
  fast: "https://cdn.videvo.net/videvo_files/video/free/2015-04/small_watermarked/Equestrian_04_Videvo_preview.webm",
  slow: "https://cdn.videvo.net/videvo_files/video/free/2019-11/small_watermarked/190301_1_25_11_preview.webm",
  cute: "https://cdn.videvo.net/videvo_files/video/free/2016-03/small_watermarked/gatos__preview.webm",
  eek: "https://cdn.videvo.net/videvo_files/video/free/2014-04/small_watermarked/Albino_Snake_CCBY_NatureClip_preview.webm",
};

export default function Videos() {
  let videos = useParams();
  let element;
  if (
    videos.type === "fast" ||
    videos.type === "slow" ||
    videos.type === "cute" ||
    videos.type === "eek"
  ) {
    element = <video src={VIDEOS[videos.type]} controls autoPlay></video>;
  } else {
    // element=null
    element = <h2>VIDEO NOT FOUND</h2>;
  }

  return <div>{element}</div>;
}
