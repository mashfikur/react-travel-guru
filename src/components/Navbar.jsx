import navLogo from "../assets/main-logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div  className="flex items-center text-white justify-between pt-9">
      <div>
        <img className="w-28 " src={navLogo} alt="" />
      </div>
      <div>
        <input
          type="text"
          placeholder="Search your Destination..."
          className="input input-ghost w-full max-w-xs"
        />
      </div>
      <div className="">
        <ul className="flex items-center gap-14">
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
                <Link> <button className="btn btn-warning capitalize text-black">Login</button> </Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
