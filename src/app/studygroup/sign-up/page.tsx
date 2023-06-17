import React from "react";
import Script from "next/script";

export default function StudygroupSignupPage() {
  return (
    <>
      <iframe
        data-tally-src="https://tally.so/embed/3XrQ6j?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        width="100%"
        height="284"
        frameBorder="0"
        title="Study Group Form"
      ></iframe>
      <Script
        defer
        id="tally-js"
        src="https://tally.so/widgets/embed.js"
        // onLoad={({ Tally }) => {
        //   Tally.loadEmbeds();
        // }}
      />
    </>
  );
}
