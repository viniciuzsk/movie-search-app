import { useEffect, useState } from 'react';
import MovieCard from './assets/components/MovieCard';

function App() {
  const [filmes, setFilmes] = useState([]);

  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_KEY_MOVIES}`;

  useEffect(() => {
    const buscarFilmes = async () => {
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error('Erro ao buscar filmes');
        }

        const data = await response.json();
        setFilmes(data.results);
      } catch (error) {
        console.error('Erro na API:', error);
      }
    };

    buscarFilmes();
  }, []);

  return (
    <div>
      <h1>Lista de filmes</h1>
      <ul className="flex gap-2 flex-wrap ">
        {filmes.map((filme) => (
          <MovieCard
            key={filme.id}
            title={filme.original_title}
            description={filme.overview}
            poster={filme.poster_path}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
