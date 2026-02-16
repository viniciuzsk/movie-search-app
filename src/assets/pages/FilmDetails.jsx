import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FilmDetails = () => {
  const [filmeDetails, setFilmeDetails] = useState({});
  const { id } = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_KEY_MOVIES}`;
  console.dir(URL);

  useEffect(() => {
    async function buscarDetalhesFilme() {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      setFilmeDetails(data);
    }

    buscarDetalhesFilme();
  }, [id]);

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w300/${filmeDetails.poster_path}`}
        alt=""
      />
      <h1>ID FILME {id}</h1>
      <h1>{filmeDetails.original_title}</h1>
      <p>{filmeDetails.overview}</p>
    </div>
  );
};

export default FilmDetails;
