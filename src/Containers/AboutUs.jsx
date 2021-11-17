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
        </figcaption>
        <figcaption className="team">
          <img src="/img/nacyme-min.jpg" alt="logo" className="teamImg" />
          <p>Nacyme</p>
        </figcaption>
        <figcaption className="team">
          <img src="/img/sonia-min.jpg" alt="logo" className="teamImg" />
          <p>Sonya</p>
        </figcaption>
        <figcaption className="team">
          <img src="/img/jonathan-min.jpg" alt="logo" className="teamImg" />
          <p>Jonathan</p>
        </figcaption>
        <figcaption className="team">
          <img src="/img/caroline-min.jpg" alt="logo" className="teamImg" />
          <p>Caroline</p>
        </figcaption>
      </div>
    </section>
  );
};

export default AboutUs;
