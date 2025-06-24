import styles from "./Rating.module.css";
// import styled from "styled-components";

export const SeriesCard = (props) => {
  const { id, img_url, name, rating, description, cast, genre, watch_url } =
    props.data;

  return (
    <li>
      <img src={img_url} alt="BB" width="15%" height="10%" />
      <h1>Name: {name}</h1>
      <h3>
        Rating:{" "}
        <span
          className={`${styles.rating} ${
            rating >= 8.5 ? styles.super_hit : styles.average
          }`}
        >
          {rating}
        </span>
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        pariatur dicta sequi quis aspernatur qui voluptate velit nisi accusamus
        ipsa unde corrupti nostrum rerum labore rem, ab modi error. Iusto?
      </p>
    </li>
  );
};
