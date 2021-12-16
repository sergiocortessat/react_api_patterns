import React from "react";
import "./App.css";
import News from "./News/News";
import SingleNews from "./News/SingleNews";

function App() {
  const [queryType, setQueryType] = React.useState({
    news1: {
      type: "top-headlines",
      query: "sources=bbc-news",
    },
    news2: {
      type: "everything",
      query: "domains=techcrunch.com&language=en",
    },
    news3: {
      type: "everything",
      query: "domains=comicbookmovie.com&language=en",
    },
  });
  return (
    <div className="container-fluid">
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper indigo lighten-4">
            <a href="#" className="brand-logo center">
              My feed
            </a>
          </div>
        </nav>
      </div>
      <div className="news-container">
        <div className="main-news">
          <News props={queryType.news1} />
          <News props={queryType.news2} />
        </div>
        <div className="single-news">
          <SingleNews {...queryType.news3} />
       </div>
      </div>
    </div>
  );
}

export default App;
