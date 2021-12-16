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
const SingleSide = ({ key, item }: itemElementsTypes) => {
  return (
    <div key={key}>
      <div className="divider"></div>
      <a href={item.url} target="_blank" rel="noreferrer">
        <div className="section">
          <h5>{item.source.name}</h5>
          <p>{item.title}</p>
        </div>
      </a>
    </div>
  );
};

export default SingleSide;
