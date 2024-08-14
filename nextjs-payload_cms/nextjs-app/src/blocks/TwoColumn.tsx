import React from "react";

interface TwoColumnType {
  heading: string;
  text: string;
  image: any;
  direction: string;
}

export default function ({ heading, text, image, direction }: TwoColumnType) {
  return (
    <>
      <h2>{Heading}</h2>
      <p>{text}</p>
    </>
  );
}
