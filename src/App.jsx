import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch('https://rickandmortyapi.com/api/character');
        if (!res.ok) throw new Error('Failed to fetch characters');
        const data = await res.json();
        setCharacters(data.results);
      } catch (err) {
        setError('Could not load characters right now. Please try again in a moment.');
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, []);

  const filtered = characters.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        <h1>👽 Character Explorer</h1>
        <p>Search characters from Rick and Morty</p>
      </header>

      <input
        className="search-bar"
        type="text"
        placeholder="Search for a character..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && (
        <div className="state-message">
          <div className="spinner"></div>
          <p>Loading characters...</p>
        </div>
      )}

      {error && (
        <div className="state-message error">
          <p>⚠️ {error}</p>
        </div>
      )}

      {!loading && !error && filtered.length === 0 && (
        <div className="state-message">
          <p>No characters match "{search}"</p>
        </div>
      )}

      {!loading && !error && (
        <div className="grid">
          {filtered.map((c) => (
            <div className="card" key={c.id}>
              <img src={c.image} alt={c.name} />
              <h3>{c.name}</h3>
              <p><strong>Status:</strong> {c.status}</p>
              <p><strong>Species:</strong> {c.species}</p>
              <p><strong>Location:</strong> {c.location.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;