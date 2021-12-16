import React from "react";
import NewsSingle from "./NewsSingle";
import Error from './Error'

type itemElementsTypes = {
  url: string;
  title: string;
  urlToImage: string;
  source: { name: string };
};
const News = ({ props }: any) => {
  const [news, setNews] = React.useState([]);
  const [error, setError] = React.useState(false);
  const renderItems = () => {
    if (!error) {
    return news.map((item: itemElementsTypes) => {
      return <NewsSingle key={item.url+item.urlToImage} item={item} />;
    });
    } else {
      return <Error />;

    }
  };

  React.useEffect(() => {
    const url = `https://newsapi.org/v2/${props.type}?${props.query}&apiKey=f92025e30b7946b29802cb740641fe65`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setNews(data.articles);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);
  return (
    <div className="news">
      {/* {news.map((item: any) => {
        return <NewsSingle key={item.id} item={item} />;
      })} */}
      {renderItems()}
    </div>
  );
};

export default News;
