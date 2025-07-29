import { Link } from "react-router-dom";
import styles from "./CategoryBox.module.css";

const CategoryBox = ({ title, icon, link }) => {
  

  return (
    <Link to={link}>
      <div className={styles.boxCategory}>
        <div className="mx-2">{icon}</div>
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

export default CategoryBox;
