import { useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";
import EditProfile from "./EditProfile";
import { useState } from "react";

const Profile = () => {
  const user = useSelector((store) => store.user);
  const data=user
  const [showEdit, setShowEdit] = useState(false);
  const [showtoast, setShowToast] = useState(false);
  
  return (
    <div>
       <div className="drawer-content flex items-center py-5 absolute  md:left-1/2 left-2/5  ">
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            Edit Profile
          </label>
        </div>
      <ProfileCard user={user} setShowToast={setShowToast} showtoast={showtoast} />
      <div className="drawer mt-4">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
       
        {data &&
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              <EditProfile
                data={data}
                setShowEdit={setShowEdit}
                setShowToast={setShowToast}
              />
            </ul>
          </div>
        }
      </div>
    </div>
  );
};

export default Profile;
