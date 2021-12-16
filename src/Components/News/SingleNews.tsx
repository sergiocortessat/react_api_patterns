import axios from "axios";
import React from "react";
import SingleSide from "./SingleSide";
import Error from "./Error";
import APINewsFetch from "./API"
type itemElementsTypes = {
  url: string;
  title: string;
  urlToImage: string;
  source: { name: string };
};

type IPropsQuery = {
  type: string,
  query: string,
  }

const SideNews = ( {type, query} : IPropsQuery) => {
  const [singleNews, setSingleNews] = React.useState([]);
  const [error, setError] = React.useState(false);

  const renderItems = () => {
    if (!error) {
      return singleNews.map((item: itemElementsTypes) => {
        return <SingleSide key={item.url+item.urlToImage} item={item} />;
      });
    } else {
      return <Error />;
    }
  };

  React.useEffect(() => {
   APINewsFetch({type,query}).then(response => {
     setSingleNews(response.data.articles)
   }).catch(error => {
     setError(error);
   })
  }, []);

  return <div>{renderItems()}</div>;
};

export default SideNews;
