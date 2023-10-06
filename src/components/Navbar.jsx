import navLogo from "../assets/main-logo.png";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="flex items-center text-white justify-evenly pt-9">
      <div>
        <img className="w-28 " src={navLogo} alt="" />
      </div>
      <div>
        <label className="flex items-center ">
          <FiSearch className="-mr-6 "></FiSearch>
          <input
            type="text"
            placeholder={` Search your destination....`}
            className="input pl-8 input-ghost bg-[#ffffff33] border border-white w-[23rem]  "
          />
        </label>
      </div>
      <div className="">
        <ul className="flex font-medium items-center gap-14">
          <li>
            <Link>News</Link>
          </li>
          <li>
            <Link>Destination</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
          <li>
            <Link>
              {" "}
              <button className="btn btn-warning capitalize text-black">
                Login
              </button>{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
