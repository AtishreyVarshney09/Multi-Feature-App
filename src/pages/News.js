import React, { useEffect, useState } from 'react';
import './News.css';

function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fba7e40483974f8eada98c966e935b77`
        );
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container">
      <h2>📰 Top News Headlines</h2>
      <div className="news-grid">
        {articles.map((article, index) => (
          <div className="card news-card" key={index}>
            <img
              src={
                article.urlToImage ||
                'https://fortune.com/img-assets/wp-content/uploads/2025/07/GettyImages-2187465802-e1753475144233.jpg?resize=1200,600'
              }
              className="card-img-top"
              alt={article.title}
            />
            <div className="card-body">
              <h5 className="card-title">{article.title.slice(0, 60)}...</h5>
              <p className="card-text">
                {article.description
                  ? article.description.slice(0, 100) + '...'
                  : 'No description available.'}
              </p>
              <p className="card-source">
                <strong>{article.source.name}</strong> |{' '}
                {new Date(article.publishedAt).toLocaleDateString()}
              </p>
              <a
                href={article.url}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Full
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
