"use client";

import { Col, Container, Row } from "react-bootstrap";

import Page from "@components/templates/page";
import React from "react";
import Script from "next/script";
import Section from "@components/templates/section";

export default function DonatePage() {
  return (
    <Page
      cover={{
        src: "https://images.unsplash.com/photo-1633029295505-17290f447251?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Donate to Raza Unida Party",
      }}
    >
      <Section>
        <Container fluid>
          <Row>
            <Col md={6}>Ok</Col>
            <Col md={6}>
              <iframe
                // allowpaymentrequest={true}
                frameBorder="0"
                height="600px"
                name="donorbox"
                scrolling="no"
                seamless={true}
                src="https://donorbox.org/embed/razaunidaparty"
                style={{
                  // maxWidth: "425px",
                  // minWidth: "250px",
                  maxHeight: "none !important",
                }}
                width="100%"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </Section>
      <Script src="https://donorbox.org/widget.js" />
    </Page>
  );
}
