import React from "react";
import "./History.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

const History = () => {
  return (
    <section className="history-container" aria-labelledby="history-heading">
      <h1 id="history-heading" className="history-heading">
        Our History
      </h1>

      
      <p className="history-subtitle">
      Dedicated to making a difference,<br />
        one step at a time.
      </p>

      <div className="history-images">
        {[img1, img2, img3, img4].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`History ${index + 1}`}
            className="fade-in"
            loading="lazy"
          />
        ))}
      </div>

      <article className="history-text">
        <h2>About the Foundation</h2>
        <p>
        Our NGO was founded with the vision of empowering underprivileged
          communities through education, skill development, and social support.
          Over the years, we have worked tirelessly to bring change at the
          grassroots level, building a future where every child has access to
          learning and opportunities.
        </p>
      </article>
    </section>
  );
};

export default History;
