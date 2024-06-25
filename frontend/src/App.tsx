// import { useState } from "react"
import Header from "./components/Header"
import Bible from "./components/Bible"
import "./App.css"

function App() {
  return (
    <div id="App">
      <Header />
      <div className="window">
        <div className="notes"></div>
        <Bible />
      </div>
    </div>
  )
}

export default App
