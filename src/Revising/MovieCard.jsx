import './MovieCard.css'

export const MovieCard = (props) => {
  const { id, name, img_url, genre } = props.data;
  const { rating } = props;
  
  return (
    <div className="movie-card">
      <img src={img_url} alt={`${name} poster`} />
      <div className="movie-content">
        <h1>{name}</h1>
        <h3>
          Rating: <span className="rating">{rating}</span>
        </h3>
        <div className="genre-tags">
          {Array.isArray(genre) ? 
            genre.map((g, index) => (
              <span key={index} className="genre-tag">{g}</span>
            )) : 
            <span className="genre-tag">{genre}</span>
          }
        </div>
      </div>
    </div>
  );
};