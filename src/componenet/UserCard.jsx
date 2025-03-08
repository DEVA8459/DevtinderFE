import React from "react";

const UserCard = ({ data }) => {
  return (
    <div
      className="card bg-base-300 w-[80vw] h-[80vh] shadow-sm 
    sm:w-full sm:max-w-xs md:max-w-sm lg:w-[30vw] lg:h-[80vh] xl:w-[40vw] xl:h-[80vh] rounded-lg overflow-hidden flex flex-col items-center"
    >
      {/* Image */}
      <figure >
        <img
          src={data.photoUrl}
          alt="User"
          className="max-w-full max-h-full  rounded-xl"
        />
      </figure>

      {/* User Info */}
      <div className="card-body text-center px-6 py-4">
        

        <div className="mt-2 text-sm sm:text-base md:text-lg">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          {data.firstName + " " + data.lastName}
        </h2>
        <div className="flex">
          <p >
            <strong>📍 Location:</strong> {data.city}, {data.country}
          </p>
          <p >
            <strong>🎂 Age:</strong> {data.age}
          </p>
        </div>
          
          <p className="text-gray-500 mt-2 text-sm">{data.about}</p>
        </div>

        {/* Skills Section */}
        {data.skills && data.skills.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 my-3">
            <p className="font-semibold text-sm sm:text-base">Skills:</p>
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-pink-500 rounded-full text-xs sm:text-sm text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
