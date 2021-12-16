import React from "react";

type itemElementsTypes = {
  key: string;
  item: {
    title: string;
    urlToImage: string;
    source: { name: string };
    url: string;
  };
};
const NewsSingle = ({ key, item }: itemElementsTypes) => {
  return (
    <div className="column">
      <div className="card">
        <div className="card-image">
          <img src={item.urlToImage} alt={item.title} />
          <span className="card-title">{item.source.name}</span>
        </div>
        <div className="card-content">
          <p>{item.title}</p>
        </div>
        <div className="card-action">
          <a href={item.url} target="_blank" rel="noreferrer" >
            Full article
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsSingle;
