import React from "react";

interface HeroType {
  heading: string;
  text: string;
  backgroundImage: any;
}

export default function Hero({ heading, text, backgroundImage }: HeroType) {
  return (
    <>
      <h2>{Heading}</h2>
      <p>{text}</p>
    </>
  );
}
