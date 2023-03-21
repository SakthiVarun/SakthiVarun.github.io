import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiHtml5,
  DiPython,
  DiAngularSimple,
  DiCss3Full,
  DiDotnet,
  DiSass,
} from "react-icons/di";
import { SiCplusplus, SiCsharp, SiMicrosoftsharepoint } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {[
        <DiHtml5 />,
        <DiCss3Full />,
        <DiSass />,
        <DiJavascript1 />,
        <DiReact />,
        <DiNodejs />,
        <DiAngularSimple />,
        <DiDotnet />,
        <SiCplusplus />,
        <DiPython />,
      ].map((tool) => (
        <Col xs={4} md={2} className="tech-icons">
          {tool}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
