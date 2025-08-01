import { useEffect } from "react";
import { useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {

    const [articles, setArticles] = useState([]);

    useEffect(()=> {
        let url = `/.netlify/functions/getNews?category=${category}&key=${import.meta.env.VITE_API_KEY}&_=${Date.now()}`;
         fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));
    }, [category])
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Latest <span className="badge bg-danger">News</span></h2>
      <div className="row justify-content-center">
        {articles?.map((news, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch" key={index}>
            <NewsItem
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsBoard