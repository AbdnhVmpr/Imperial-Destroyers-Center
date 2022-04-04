import { Link } from "react-router-dom";

import Button from "../../components/Button";
import "./Section.scss";

const Section = ({ id, title, description, url, image }) => {
  let reverse_row = "row";
  let bg = "";

  if (id % 2 === 0) {
    reverse_row = "row-reverse";
    bg = "#ff000029";
  }

  return (
    <div style={{ backgroundColor: bg }}>
      <div className="section container" style={{ flexDirection: reverse_row }}>
        <div className="section__image-container">
          <img src={image} alt={image} />
        </div>

        <div className="section__info-container">
          <div className="title">{title}</div>

          <div className="description">{description}</div>

          <div className="button">
            <Link to={`/${url}`}>
              <Button>Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
