import React from "react";
import Card from "react-bootstrap/Card";
import { BsArrowRightShort } from "react-icons/bs";
import { useTranslation } from "react-i18next";
function AboutCard() {
  const  { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          {t('Greeting')} {t('Im')} <span className="green">Sakthi Varun</span>, {t('I work at')} <span className="green">{t('Avasoft')}</span> {t('Chennai')}.
            <br/>
            {t('I hold')} <span className="green">Electronics and Communication</span> {t('Degree')} {t('And experience in')} <span className="green">Providing Soluions</span>.
            
            <br/>
            <br/>
            {t('Interests')}
          </p>
          <ul>
            <li className="about-activity">
              <BsArrowRightShort /> Video Games
            </li>
            <li className="about-activity">
              <BsArrowRightShort /> Music
            </li>
            <li className="about-activity">
              <BsArrowRightShort /> Coding
            </li>
            <li className="about-activity">
              <BsArrowRightShort /> Software Engineering
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
