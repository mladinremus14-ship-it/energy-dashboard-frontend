import { useEffect, useState } from "react";
import "./style.css";

export default function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://energy-news-dashboard-production.up.railway.app/api/news")
      .then((res) => res.json())
      .then((data) => setNews(data.items || []))
      .catch(console.error);
  }, []);

  return (
    <div className="app">
      <h1>Energy News Dashboard</h1>
      {news.map((item, i) => (
        <div key={i} className="card">
          <h3>{item.title}</h3>
          <p>{item.source}</p>
          <a href={item.link} target="_blank">Open</a>
        </div>
      ))}
    </div>
  );
}
