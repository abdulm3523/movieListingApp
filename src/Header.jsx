import Logo from "./assets/logo.svg";
import Ring from "./assets/ring.svg";
import Moon from "./assets/icons/moon.svg";
import Cart from "./assets/shopping-cart.svg";
import CartDetails from "./cartDetails";
import { useContext, useState } from "react";
import { MovieData } from "./context";
export default function Header() {
  const [showCartModal, setShowCartModal] = useState(false)
  const {cartData} =useContext(MovieData)
  function handelShowCartModal(e) {
    e.preventDefault()
    setShowCartModal(true)
  }
  return (
    <>
      
      {
        showCartModal && <CartDetails closeModal={()=>setShowCartModal(false)} />
      }
     <header>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="Ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Moon} width="24" height="24" alt="Moon" />
            </a>
          </li>
          <li>
            <a onClick={(e)=>handelShowCartModal(e)}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
                <img src={Cart} width="24" height="24" alt="Cart" />
                <span>{cartData.length>0? cartData.length : ''}</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
    </>
   
  );
}
