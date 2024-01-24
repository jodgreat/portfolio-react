import React from "react";

function About() {
  return (
    <div>
      <div className="about-me">
        <h1>About Me</h1>
        <p>
          Hello, I'm Jonald Pagadduan,graduate in Bachelor of Science and
          Information Technology from Caloocan City. With a background as an
          illustrator and art assistant, I've honed my creative skills and
          attention to detail.
        </p>
        <p>
          Now, I'm eager to transition into a new role as an entry-level
          front-end web developer, where I can apply my passion for design and
          technology to create engaging and user-friendly web experiences.My
          dedication to self-improvement, coupled with my strong work ethic and
          adaptability, drives me to excel in my chosen path.
        </p>
        <p>
          I am eager to contribute my unique blend of creativity and technical
          expertise to projects that challenge me to grow as a web developer.
        </p>
      </div>
     <div className="skills-container">
     <h2> Skills</h2>
     <div className="skills-list">
        <div className="tech-stack">
            <h4>Tech Stack</h4>
            <ul>
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>Jquery</li>
                <li>Ejs</li>
                <li>React.js</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>MongoDb</li>
                <li>MySql</li>
            </ul>
        </div>
        <div className="tools">
            <h4>Tools</h4>
           <ul>
           <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Premiere</li>
            <li>Microsoft Office</li>
            <li>Figma</li>
           </ul>
        </div>
      </div>
     </div>
      <div className="experience">
        <h2>Experience</h2>
        <div className="company">
          <div className="polygon">
            <h3> Freelance Illustrator</h3>
            <h4> Polygon Digital Inc</h4>
            <ul>
              <li>
                Created custom cartoon portraits for clients by transforming
                their reference pictures into engaging and vibrant cartoon
                versions inspired by popular animated shows like Rick and Morty
                and Bob's Burgers.
              </li>
              <li>
                Utilized a combination of artistic skills, digital tools, and
                specialized techniques to accurately capture the essence of the
                client's reference photos while infusing them with the
                distinctive style and humor of the chosen animated series.
              </li>
              <li>
                Collaborated closely with clients to understand their vision and
                preferences, ensuring their satisfaction throughout the creative
                process and delivering personalized and unique cartoon portraits
                that surpassed their expectations
              </li>
            </ul>
          </div>
          <div className="freshprint">
            <h3> Art Assistant</h3>
            <h4> Fresh Prints</h4>
            <ul>
              <li>
                {" "}
                Upload proofs and revisions as quickly and as high quality as
                possible while making a few mistakes. • Ensure the proofs and
                revisions are precisely what the client or manager requests.{" "}
              </li>
              <li>
                {" "}
                We are studying and learning fashion and design trends in the US
                among our clients.
              </li>
              <li>
                Completing a set number of proof and revision requests per day.
              </li>
              <li>
                {" "}
                Communicating with the Campus Managers and logistics team to
                ensure our proofs meet their needs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
