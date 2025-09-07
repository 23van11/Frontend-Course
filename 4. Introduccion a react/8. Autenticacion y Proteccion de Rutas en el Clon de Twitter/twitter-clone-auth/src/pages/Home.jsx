import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = ({ user, logout }) => {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const storedTweets = localStorage.getItem("tweets");
    if (storedTweets) {
      setTweets(JSON.parse(storedTweets));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }, [tweets]);

  const handleTweetSubmit = (e) => {
    e.preventDefault();
    if (!tweet.trim()) return;

    const newTweet = {
      id: Date.now(),
      text: tweet,
      author: user.username,
      timestamp: new Date().toLocaleString()
    };

    setTweets([newTweet, ...tweets]);
    setTweet("");
  };

  return (
    <div className="home-container">
      <div className="header">
        <h1>Inicio</h1>
        <div>
          <span>Hola, {user?.username}</span>
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      </div>

      <form onSubmit={handleTweetSubmit} className="tweet-form">
        <textarea
          placeholder="¿Qué está pasando?"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          rows="3"
        />
        <button type="submit">Twittear</button>
      </form>

      <div className="tweet-list">
        {tweets.length === 0 && <p>No hay publicaciones aún.</p>}
        {tweets.map((t) => (
          <div className="tweet" key={t.id}>
            <strong>@{t.author}</strong>
            <p>{t.text}</p>
            <span className="timestamp">{t.timestamp}</span>
          </div>
        ))}
      </div>

      <div className="profile-link">
        <Link to="/profile">Ir a Perfil</Link>
      </div>
    </div>
  );
};

export default Home;
