import { useEffect, useState } from 'react'
import MovieList from './components/MovieList.jsx'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])

  const [title, setTitle] = useState('')

  useEffect(() => {
    setMovies(['Shrek', 'Król Lew', 'Toy Story'])
  }, [])

  function addMovie() {
    if (title === '') return
    setMovies([...movies, title])
    setTitle('')
  }

  return (
    <div className="app">
      <h1>Biblioteczka filmów</h1>

      <div className="form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Wpisz tytuł filmu"
        />
        <button onClick={addMovie}>Dodaj film</button>
      </div>

      <MovieList movies={movies} />
    </div>
  )
}

export default App
