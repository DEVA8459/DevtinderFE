import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constant";
import axios from "axios";
import { removeUser } from "../store/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Navbar = () => {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const logout = await axios.post(
        BASE_URL + "/logout",
        {},
        { withCredentials: true }
      );
      dispatch(removeUser(logout.data));
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="navbar flex justify-between bg-gradient-to-l gap-8 from-rose-500 to-pink-700/70 shadow-md shadow-black px-4 md:px-6 lg:px-10">
      <div className="">
        <Link to="/" className="flex items-center gap-5">
          <img src="pngwing.com.png" className="w-10 " />
          <p className=" text-xl font-bold ">
            DEVTINDER
          </p>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        {user && (
          <div className="flex items-center gap-2">
            <Link to="/profile">
              <p className="text-sm  md:text-xl font-bold ">
                Welcome {user.firstName}
              </p>
            </Link>
            <div className="w-10 h-10 rounded-full overflow-hidden border border-accent">
              <img
                alt="userPhoto"
                src={user.photoUrl}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <IoIosArrowDropdownCircle size={30} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  mt-3 w-48 p-2 bg-gradient-to-r from-rose-500/50 to-black/50 rounded-lg"
            >
              <li>
                <Link to="/profile">
                  <p className="text-lg font-bold ">Profile</p>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <p className="text-lg font-bold ">Feed</p>
                </Link>
              </li>
              <li>
                <Link to="/user/connections">
                  <p className="text-lg font-bold ">Connections</p>
                </Link>
              </li>
              <li>
                <Link to="/request">
                  <p className="text-lg font-bold ">
                    Pending Requests
                  </p>
                </Link>
              </li>
              <li>
                <Link to="/ignoreReject">
                  <p className="text-lg font-bold ">
                    Rejected & Ignored
                  </p>
                </Link>
              </li>
              <li onClick={handleLogout}>
                <p className="text-lg font-bold  bg-red-700">Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
