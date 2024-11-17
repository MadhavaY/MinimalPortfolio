import React from "react";
import "./style.css";

function Page() {
  return (
    <div className="page">
      <section className="main-header">
        <h1>
          <span className="name-heading">
            {" "}
            Yedla <br /> Madhava
          </span>{" "}
          <br />
        </h1>
        <span>
          <span className="text">I build things for the web and </span>
          <span className="text">develop solutions using Machine learning</span>
        </span>

        <div className="intro">
          <section className="information">
            {" "}
            A Computer Science graduate student with interests in Machine
            Learning and front-end development. School has really helped build
            my interest in developing smart systems while making sure they're
            usable at the same time. I just love combining technical
            problem-solving with the creativity of designing interfaces with
            strong knowledge in algorithms and programming. I look forward to
            creating new applications, using those skills to push beyond what is
            possible in both AI and web development.{" "}
          </section>
        </div>
      </section>
    </div>
  );
}

export default Page;
