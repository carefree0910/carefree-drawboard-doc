import React from "react";
import ReactPlayer from "react-player";

export default function Video({ url }) {
  return (
    <>
      <div align="center">
        <ReactPlayer playing controls url={url} />
      </div>

      <br />
    </>
  );
}
