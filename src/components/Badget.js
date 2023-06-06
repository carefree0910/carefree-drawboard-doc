import React from "react";

export default function Badget({ type, defaultValue, required, appendix }) {
  const tag = (
    <>
      {appendix && (
        <>
          {" "}
          - <code>{appendix}</code>
        </>
      )}
    </>
  );
  return (
    <p>
      [ <strong>{type}</strong>
      {required ? (
        <>
          <em>, required</em>
          {tag}
        </>
      ) : !!defaultValue ? (
        <>
          <em>, default</em>: <code>{defaultValue}</code>
          {tag}
        </>
      ) : (
        ""
      )}{" "}
      ]
    </p>
  );
}
