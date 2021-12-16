import axios from "axios";

type IArgs = {
  type: string;
  query: string;
};

const APINewsFetch = ({type, query}:IArgs) => {
  const url = `https://newsapi.org/v2/${type}?${query}&apiKey=f92025e30b7946b29802cb740641fe65`;
  return axios.get(url);
};

export default APINewsFetch;
