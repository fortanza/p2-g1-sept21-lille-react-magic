import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="sectionTeam">
      <div className="teamTitle">
        <h1>Play Team</h1>
      </div>
      <div className="flex">
        <figcaption className="team">
          <img src="/img/cedric-min.jpg" alt="logo" className="teamImg" />
          <p>Cedric</p>
          <div className="socialLink">
            <a href="https://github.com/fortanza">
              <img
                src="https://img.icons8.com/material-outlined/24/ffffff/github.png"
                alt="github"
              />
            </a>
            <a href="https://www.linkedin.com/in/cedric-rene-jean-lasalle-b783891bb/">
              <img
                src="https://img.icons8.com/material-outlined/24/ffffff/linkedin--v1.png"
                alt="linkedin"
              />
            </a>
          </div>
        </figcaption>
        <figcaption className="team">
          <img src="/img/nacyme-min.jpg" alt="logo" className="teamImg" />
          <p>Nacyme</p>
          <div className="socialLink">
            <a href="https://github.com/NacymeG">
              <img
                src="https://img.icons8.com/material-outlined/24/ffffff/github.png"
                alt="github"
              />
            </a>
            <a href="https://www.linkedin.com/in/nacymeg/">
              <img
                src="https://img.icons8.com/material-outlined/24/ffffff/linkedin--v1.png"
                alt="linkedin"
              />
            </a>
          </div>
        </figcaption>
        <figcaption className="team">
          <img src="/img/sonia-min.jpg" alt="logo" className="teamImg" />
          <p>Sonya</p>
          <div className="socialLink">
            <a href="https://github.com/Sonya092">
              <img
                src="https://img.icons8.com/material-outlined/24/ffffff/github.png"
                alt="github"
              />
            </a>
            <a href="https://www.linkedin.com/in/sonia-benoumeur-357838221">
              <img
                src="https://img.icons8.com/material-outlined/24/ffffff/linkedin--v1.png"
                alt="linkedin"
              />
            </a>
          </div>
        </figcaption>
        <figcaption className="team">
          <img src="/img/jonathan-min.jpg" alt="logo" className="teamImg" />
          <p>Jonathan</p>
          <div className="socialLink">
            <a href="https://github.com/John-athan14">
              <img
                src="https://img.icons8.com/material-outlined/24/ffffff/github.png"
                alt="github"
              />
            </a>
            <a href="https://www.linkedin.com/in/jonathan-guillot-75b322224/">
              <img
                src="https://img.icons8.com/material-outlined/24/ffffff/linkedin--v1.png"
                alt="linkedin"
              />
            </a>
          </div>
        </figcaption>
        <figcaption className="team">
          <img src="/img/caroline-min.jpg" alt="logo" className="teamImg" />
          <p>Caroline</p>
          <div className="socialLink">
            <a href="https://github.com/Caroline-CD">
              <img
                src="https://img.icons8.com/material-outlined/24/ffffff/github.png"
                alt="github"
              />
            </a>
            <a href="https://www.linkedin.com/in/caroline-copy-denhez-00b9aab9/">
              <img
                src="https://img.icons8.com/material-outlined/24/ffffff/linkedin--v1.png"
                alt="linkedin"
              />
            </a>
          </div>
        </figcaption>
      </div>
    </section>
  );
};

export default AboutUs;
