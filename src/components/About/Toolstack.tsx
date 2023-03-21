import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGit,
  SiMicrosoftsharepoint,
  SiPowerautomate,
  SiPowerapps,
} from "react-icons/si";

import { DiUnitySmall, DiGithubBadge } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {[
        <SiMicrosoftsharepoint />,
        <SiPowerautomate />,
        <SiPowerapps />,
        <SiGit />,
        <DiUnitySmall />,
        <SiVisualstudiocode />,
        <DiGithubBadge />,

      ].map((tool) => (
        <Col xs={4} md={2} className="tech-icons">
          {tool}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
