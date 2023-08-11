import {useState} from "react";
import { Link } from "react-router-dom";
import {styles} from '../style'
import {navLinks} from '../constants'
import {menu,close,logo} from '../assets'
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle,setToggle]=useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center fixed py-5 z-20 top-0 bg-primary`}>
        <div className="w-full flex items-center mx-auto justify-between max-w-7xl ">
          <Link to='/' className="flex items-center gap-2" onClick={()=>{setActive("");window.scrollTo(0,0)}}>
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex ">Kenan al homsi &nbsp;  <span className="sm:block hidden"> | &nbsp;Front end developer</span></p>
          </Link>
          <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={()=>{setToggle(!toggle)}} />
          <div className={`${!toggle?  "hidden":"flex"} p-6  black-gradient absolute top-20 right-0  rounded-xl mx-4 my-2 z-10 min-w-[140px]`}>
          <ul className='list-none flex justify-end items-start   flex-col gap-4'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              }font-popen font-poppins cursor-pointer text-[16px] font-medium`}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar