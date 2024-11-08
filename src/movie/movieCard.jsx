import { getCoverUrl } from "../utility/getUrl";
import Rating from "./rating";
import MovieDetails from "./movieDetails";
import { useContext, useState } from "react";
import { MovieData } from "../context";
export default function MovieCard({ movie }) {
    const [modalShow, setModalShow] = useState(false)
    const {cartData, setCartData} =useContext(MovieData)


    function handelOnModalShow(e) {
        e.preventDefault()
        setModalShow(true)
    }
    function handelAddToCart(e,movie) {
        e.stopPropagation()
            e.preventDefault()
            
        const found = cartData.find(item=> item.id === movie.id)
        if (!found) {
            setCartData([
                ...cartData,
                movie
            ])
        }
        console.log(cartData)
    }
  return (
    <>
      {modalShow && (
        <MovieDetails movie={movie} onModalClose={() => setModalShow(false)} addToCart={(e)=>handelAddToCart(e,movie)} />
      )}
      <figure
        id={movie.id}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      >
        <a href="" onClick={(e) => handelOnModalShow(e)}>
                  <img
                      width='200'
            className="object-cover"
            src={getCoverUrl(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <Rating value={movie.rating} />
                      <button className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                      onClick={(e)=>handelAddToCart(e,movie)}
                      >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
