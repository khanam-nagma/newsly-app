
import image from '../assets/image.png'
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-4 shadow-sm w-100" style={{ minHeight: "420px", maxWidth: "100%" }}>
      <img
        src={src ? src : image}
        style={{ height: "200px", objectFit: "cover", width: "100%" }}
        className="card-img-top"
        alt="news"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title" title={title}>{title ? title.slice(0, 60) : "Untitled"}</h5>
        <p className="card-text flex-grow-1">{description ? description.slice(0, 110) : "No description available."}</p>
        <a href={url} className="btn btn-primary mt-auto" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    </div>
  );
}

export default NewsItem