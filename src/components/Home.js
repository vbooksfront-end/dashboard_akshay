import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [news, setNews] = useState([
    "Today is HR Birthday",
    "A is promoted as senior developer",
    "This week has the most leaves",
    "X gave achievement badge To Mr.Y",
    "Tommorow will be halfday",
    "Meeting will be there for staffs on saturday noon"
  ]);

  return (
    <div className="news-box">
      <div className="news-box-header">
        <h2 id="h2">What's New</h2>
      </div>
      <div className="news-box-content">
        <ul>
          {news.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
