import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"
import NewsItem from "./Components/NewsItem"

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div className="app-bg min-vh-100 d-flex flex-column">
      <Navbar setCategory={setCategory} category={category}/>
      <div className="flex-grow-1">
        <NewsBoard category={category}/>
        {/* <NewsItem/> */}
      </div>
      <footer className="footer mt-auto py-3 text-center ">
        <div className="container">
          <hr className="mb-3" style={{ borderColor: "#ff1744", opacity: 0.3 }} />
          <span style={{ fontWeight: 500, letterSpacing: 1 }}>
            Made with <span style={{ color: "#ff1744", fontWeight: 700 }}>&hearts;</span> by Newsly &copy; {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App