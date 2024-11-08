import "./App.css";
import Header from "./Header";
import MovieList from "./movie/movieList";
import Sidebar from "./Sidebar";
import { MovieData } from "./context";
import { useState } from "react";

function App() {
  const [cartData,setCartData]=useState([])
  return (
    <MovieData.Provider value={{cartData,setCartData}}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList/>
        </div>
      </main>
    </MovieData.Provider>
  );
}

export default App;
