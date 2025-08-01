

import logo from "../assets/image.png";

const Navbar = ({ setCategory, category }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow fixed-top"
      style={{
        background: "linear-gradient(90deg, #0f2027 0%, #2c5364 100%)",
        borderBottom: "3px solid #ff1744",
        minHeight: "70px",
        zIndex: 1050,
        left: 0,
        right: 0,
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img
            src={logo}
            alt="Newsly Logo"
            style={{ width: 40, height: 40, borderRadius: "8px", objectFit: "cover", boxShadow: "0 2px 8px #0003" }}
          />
          <span className="fw-bold fs-3 text-gradient" style={{
            background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "2px"
          }}>Newsly</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {[
              { label: "Technology", value: "technology" },
              { label: "Business", value: "Business" },
              { label: "Health", value: "Health" },
              { label: "Science", value: "Science" },
              { label: "Sports", value: "Sports" },
              { label: "Entertainment", value: "Entertainment" },
            ].map((item) => (
              <li className="nav-item" key={item.value}>
                <span
                  className={`nav-link px-3${category === item.value ? " active fw-bold text-danger" : ""}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setCategory(item.value)}
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
          <form className="d-flex ms-lg-3 mt-2 mt-lg-0" role="search">
            <input
              className="form-control me-2 bg-light border-0 shadow-sm"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ minWidth: 120 }}
            />
            <button className="btn btn-danger fw-bold shadow-sm" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar