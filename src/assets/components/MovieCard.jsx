const MovieCard = ({ title, description, poster }) => {
  return (
    <li className="w-2xs">
      <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="" />
      <h1 className="text-3xl font-bold underline">{title}</h1>
      <p>{description}</p>
    </li>
  );
};

export default MovieCard;
