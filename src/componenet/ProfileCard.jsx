import React, { useState } from "react";
import EditProfile from "./EditProfile";

const ProfileCard = ({ user, showtoast, setShowToast }) => {
  const data = user;

  return (
    <div className=" flex justify-center items-center ">
      {data ? (
        <div className=" shadow-xl shadow-black overflow-hidden w-full  lg:h-[100vh] md:flex md:items-center transition-all md:-mt-10  ">
          <div className="md:w-3/5 flex justify-center    ">
            <img
              src={user.photoUrl}
              className=" max-w-105 max-h-[80vh] object-cover shadow-xl shadow-black m-4 border-4 border-gray-700 px-5  "
              alt="Profile"
            />
          </div>

          <div className="p-4 md:w-1/2  flex flex-col  text-gray-300 bg-black/20 rounded-xl px-9 md:mr-10 shadow-xl shadow-black">
            <h1 className="text-3xl font-bold ">
              {data.firstName} {data.lastName}
            </h1>
            <p className="text-lg text-blue-800 font-bold">{data.about}</p>

            <div className="my-4 text-warning">
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
                <strong>🎂 gender:</strong> {data.gender}
              </p>
              {/* <p>
                <strong>🗓️ Member Since:</strong> {data.createdAt.split("T")[0]}
              </p> */}
            </div>

            <div className="flex flex-wrap gap-2 my-3">
              <p className="text-xl font-bold ">Skills:</p>
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-pink-500 rounded-full shadow-md shadow-black text-sm text-white font-bold"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 my-3">
              <p className="text-xl font-bold ">Hobby:</p>
              {data.hobby.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-warning rounded-full shadow-md shadow-black text-sm text-primary font-bold"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 my-3">
              <p className="text-xl font-bold ">Movies:</p>
              {data.movies.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-pink-500 rounded-full shadow-md shadow-black text-sm text-white font-bold"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 my-3">
              <p className="text-xl font-bold ">Education:</p>
              {data.education.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-accent rounded-full shadow-md shadow-black text-sm text-primary font-bold "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {showtoast && (
            <div className="toast toast-center toast-middle">
              <div className="alert alert-info">
                <span className=" font-bold">
                  Profile Updated successful !!
                </span>
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
