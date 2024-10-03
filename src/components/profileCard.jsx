import { Link } from "react-router-dom";
import "./stylesCSS/profile.css";

function ProfileCard() {
  return (
    <>
      <h1 className="profile-head">Profiles</h1>
      <div className="Profile-div">
        <div className="profie-card">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQEA5Qe-V0o94w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723446262640?e=1733356800&v=beta&t=c6RUhE4-iAy0PGWtyn3SooGWJr4yzf9lZJh4f5RayQ4"
            alt=""
          />
          <h1>Waseem Khalil</h1>
          <p>
            Hi there ! <span> I am a Frontend Developer. </span> I have created
            by E- Commerce Website
          </p>
          <div className="social-platform">
            <Link to={"https://github.com/waseemkhalil786"}>Github</Link>
            <Link to={"https://www.linkedin.com/in/waseem-khalil-795b732a7/"}>
              Linkedin
            </Link>
          </div>
        </div>
        <div className="profie-card">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D35AQG_frsrnF0Vpw/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1723369811264?e=1728457200&v=beta&t=496xELKTGhOKRLLT_XAQQ0EVdqsUnVy9OyctKllP8wQ"
            alt=""
          />
          <h1>Bilal Raza</h1>
          <p>
            Hi there ! Sir Bilal Raza is my teacher in web and mobile app
            development.
          </p>
          <div className="social-platform">
            <Link to={"https://github.com/bilalattari"}>Github</Link>
            <Link to={"https://www.linkedin.com/in/bilal-raza-0082a8186/"}>
              Linkedin
            </Link>
          </div>
        </div>
        <div className="profie-card">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQG30pc-f4uGrA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1685650687539?e=1733356800&v=beta&t=KKAHCZZ5Rn2v6_JVb4wG00BAJcZYJLD74-920oDU3AM"
            alt=""
          />
          <h1>Shehzad Iqbal</h1>
          <p>
            Hi there ! Sir Shehzad Iqbal is my teacher in web and mobile app
            development.
          </p>
          <div className="social-platform">
            <Link to={"https://github.com/shehza-d"}>Github</Link>
            <Link to={"https://www.linkedin.com/in/shehza-d/"}>Linkedin</Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProfileCard;
