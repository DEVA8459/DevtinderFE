import React, { useState } from "react";
import EditProfile from "./EditProfile";

const ProfileCard = ({ user }) => {
  const data = user;
  const [showEdit, setShowEdit] = useState(false);
  const [showtoast, setShowToast] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 to-black ">
      {data ? (
        <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden w-full max-w-4xl md:flex md:items-center transition-all">
          {/* Profile Image */}
          <div className="md:w-3/5 flex justify-center">
            <img
              src={user.photoUrl}
              className="w-80  object-cover rounded-lg m-4 border-4 border-gray-700"
              alt="Profile"
            />
          </div>

          {/* Profile Details */}
          <div className="p-6 md:w-1/2 flex flex-col text-gray-300">
            <h1 className="text-3xl font-bold text-white">
              {data.firstName} {data.lastName}
            </h1>
            <p className="text-lg text-gray-400">{data.about}</p>

            <div className="my-4">
              <p>
                <strong>📍 Location:</strong> {data.city}, {data.country}
              </p>
              <p>
                <strong>📞 Contact:</strong> {data.contact}
              </p>
              <p>
                <strong>🎂 Age:</strong> {data.age}
              </p>
              <p>
                <strong>🗓️ Member Since:</strong> {data.createdAt.split("T")[0]}
              </p>
            </div>

            {/* Skills Section */}
            <div className="flex flex-wrap gap-2 my-3">
              <p>Skills:</p>
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-pink-500 rounded-full text-sm text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 my-3">
              <p>Hobby:</p>
              {data.hobby.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-pink-500 rounded-full text-sm text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 my-3">
              <p>Movies:</p>
              {data.movies.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-pink-500 rounded-full text-sm text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 my-3">
              <p>Education:</p>
              {data.education.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-pink-500 rounded-full text-sm text-white"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="drawer mt-4">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer"
                  className="btn btn-primary drawer-button"
                >
                  Edit Profile
                </label>
              </div>
              {
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    <EditProfile data={data} setShowEdit={setShowEdit} setShowToast={setShowToast}/>
                  </ul>
                </div>
              }
            </div>
          </div>
          {showtoast && (
        <div className="toast toast-center toast-middle">
          <div className="alert alert-info">
            <span className=" font-bold">Profile Updated successful !!</span>
          </div>
        </div>
      )}
        </div>
      ) : (
        <p className="text-white text-xl">Loading...</p>
      )}
    </div>
  );
};

export default ProfileCard;
