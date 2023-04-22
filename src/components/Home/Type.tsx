import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";

function Type() {
  const { t } = useTranslation();

  return (
    // <Typewriter
    //   options={{
    //     strings: [
    //       t('Web Developer'),
    //       t('Solution Architect'),
    //       t('Portal Developer')
    //     ],
    //     autoStart: true,
    //     loop: true,
    //     deleteSpeed: 50,
    //   }}
    // />
    <>
    <span className="profession">        
      Web Developer, <br/>Solution Architect, <br/>Portal Developer </span>
    </>
  );
}

export default Type;
