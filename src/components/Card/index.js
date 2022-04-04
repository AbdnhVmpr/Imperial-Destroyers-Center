import "./Card.scss";
import { getImage } from "../../utils/path";

const Card = ({ url, name, category, children }) => {
  return (
    <div className="card">
      {/* <Link to={`/${category}/${getId(url, category)}`}> */}
      <div className="card__image-container">
        <img src={getImage(url, category)} alt="category_image" />
      </div>
      <div className="card__info-container">
        <h3>{name}</h3>
        {children}
      </div>
      {/* </Link> */}
    </div>
  );
};

export default Card;
