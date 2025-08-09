import React from "react";
import "./OurWork.css";
import project1 from "../../assets/img7.jpg";
import project2 from "../../assets/img6.jpg";
import project3 from "../../assets/img5.jpg";

const OurWork = () => {
  const projects = [
    {
      img: project1,
      title: "Free Education Camps",
      desc: "Organizing free educational sessions for underprivileged children.",
    },
    {
      img: project2,
      title: "Food Distribution",
      desc: "Providing meals to homeless and needy people in rural areas.",
    },
    {
      img: project3,
      title: "Women Empowerment",
      desc: "Skill development workshops for women to help them earn independently.",
    },
  ];

  return (
    <section className="ourwork-container" aria-labelledby="ourwork-title">
      <h1 id="ourwork-title" className="ourwork-title">
        Our Work
      </h1>
      <p className="ourwork-subtitle">
        Here are some of the initiatives we are proud to work on.
      </p>

      <div className="ourwork-grid">
        {projects.map((project, index) => (
          <article className="work-card" key={index}>
            <img
              src={project.img}
              alt={project.title}
              className="work-image"
              loading="lazy"
            />
            <h2 className="work-title">{project.title}</h2>
            <p className="work-desc">{project.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OurWork;
