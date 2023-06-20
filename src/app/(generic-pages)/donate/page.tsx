import React from "react";
import Script from "next/script";

export default function DonatePage() {
  return (
    <>
      <h1>Donate Page</h1>
      <Script src="https://donorbox.org/widget.js" />
      <iframe
        // allowpaymentrequest={true}
        frameBorder="0"
        height="600px"
        name="donorbox"
        scrolling="no"
        seamless={true}
        src="https://donorbox.org/embed/razaunidaparty"
        style={{
          maxWidth: "425px",
          minWidth: "250px",
          maxHeight: "none !important",
        }}
        width="100%"
      ></iframe>
    </>
  );
}
