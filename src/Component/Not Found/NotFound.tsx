import React from "react";
import './styles/style.css';
import 'https://kit.fontawesome.com/4b9ba14b0f.js';

function NotFound() {
  return (
    <div>
      <div className="mainbox">
        <div className="err">4</div>
        <i className="far fa-question-circle fa-spin" />
        <div className="err2">4</div>
        <div className="msg">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <p>
            {/* Let's go <a href="#">home</a> and try from there. */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
