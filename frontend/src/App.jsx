import { BrowserRouter, Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Blogs from "./pages/Blogs"
import Layout from "./components/Layout/Layout"



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;