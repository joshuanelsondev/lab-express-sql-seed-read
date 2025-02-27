import { Link } from "react-router-dom";
import {
  FaHome,
  FaHeadphones,
  FaPlus,
  FaLayerGroup,
} from "react-icons/fa";

export default function NavBar() {
    return (
      <div className="flex flex-col bg-neutral w-28 h-full text-center text-light font-semibold pt-8">
        <div>
          <Link className="flex flex-col" to={"/songs"}>
            <FaHeadphones
              className="self-center cursor-pointer mb-8  hover:text-secondary"
              size={30}
            />
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-start pl-2 gap-2 group">
            <FaHome className="group-hover:text-secondary" />
            <Link to={"/"} className="group-hover:text-secondary" >Home</Link>
          </div>
          <div className="flex items-center justify-start pl-2 gap-2 group">
            <FaLayerGroup className="group-hover:text-secondary" />
            <Link to={"/songs"} className="group-hover:text-secondary" >My List</Link>
          </div>
          <div className="flex items-center justify-start pl-2 gap-2 group">
            <FaPlus className="group-hover:text-secondary" />
            <Link to={"/songs/new"} className="group-hover:text-secondary" >Add Song</Link>
          </div>
        </div>
      </div>
    );
}