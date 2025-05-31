import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gaurang Gautam </span>
            from <span className="purple"> Kanpur, Uttar Pradesh, India.</span>
            <br />
            I am currently a student at Pranveer Singh Institute of Technology.
            <br />
            I am pursuing B.Tech in Computer Science and Engineering with Artificial Intelligence.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "True success and happiness aren't found in chasing external achievements, but in savoring the journey itself!"{" "}
          </p>
          <footer className="blockquote-footer">Gaurang Gautam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
