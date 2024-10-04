import React, { useEffect, useContext, useState } from "react";
import "./Timeline.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import { ThemeContext } from "../../../context/Theme";

const Timeline = () => {
  const [{ theme }] = useContext(ThemeContext);
  const [linecolor, setlinecolor] = useState(theme === "dark" ? "#747684" : "");

  useEffect(() => {
    if (theme === "dark") {
      setlinecolor("white");
    } else {
      setlinecolor("#23283e");
    }
  }, [theme]);

  return (
    <>
      <div className="section mainsection">
        <h2 className="timeline-title">
          My <span className="different">Timeline </span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Jan 2024 - Present"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "1px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Front-End Developer (Full Time)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">SD Campus</h4>
            <p>
              A React Front-End Developer for full time in <br />
              SD Campus (Noida)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"June 2023 - Dec 2023"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "1px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Front-End Developer (Intern)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              SleekSites & Trando
            </h4>
            <p>
              Done two Internships in 7 months in two compaines{" "}
              <span className="different">SleekSites</span> and
              <span className="different"> Trando</span>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Feb 2023 - June -2023"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "1px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Learner</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Relevel, Code Help & Youtube
            </h4>
            <p>
              Making 15+ Projects using Javascript, React JS, Redux, Tailwind
              CSS, MUI & Firebase.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Sept 2022 - Feb 2023"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "1px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Student</h3>
            <h4 className="vertical-timeline-element-subtitle">
              <span className="different">Relevel</span> by Unacademy (Remote)
            </h4>
            <p>
              Joined the Relevel course to learn Front-end Development & also
              learned many soft skills in the process.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Jul 2019 - Aug 2022"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "1px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Student (BCA)</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Aryabhatta Knowledge University (AKU), Patna
            </h4>
            <p>
              I have done my Bachelor of Computer Application which consists of
              various Programing languages.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={<StarIcon />}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Timeline;
