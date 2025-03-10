import React from "react";

const UserCard = ({ data }) => {
  return (
    <div
      className="card    shadow-sm 
    sm:w-full sm:max-w-xs md:max-w-sm lg:w-[30vw] lg:h-[80vh] xl:w-[40vw] xl:h-[80vh] rounded-lg overflow-hidden flex flex-col items-center"
    >
      <figure className="shadow-2xl shadow-black rounded-2xl relative ">
        <img
          src={data.photoUrl}
          alt="User"
          className="max-w-90 max-h-140 w-120 h-140 "
        />
      </figure>

      <div className="card-body text-center px-6 py-4 absolute z-100 py-95">
        <div className="mt-2 text-sm sm:text-base md:text-lg bg-black/50 rounded-2xl w-100">
          <h2 className="text-xl text-accent sm:text-2xl md:text-3xl font-bold">
            {data.firstName + " " + data.lastName}
          </h2>
          <p>
            <strong>🎂 Gender:</strong> {data.gender}
          </p>
          <div className="flex  text-warning">
            <p className="text-warning">
              <strong>📍 Location:</strong> {data.city}, {data.country}
            </p>
            <p>
              <strong>🎂 Age:</strong> {data.age}
            </p>
          </div>
          
          <p className="text-info px-2 text-sm text-wrap font-bold line-clamp-2">
            {data.about}
          </p>
          {data.skills && data.skills.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 my-3">
              <span className="font-bold text-xl sm:text-base text-accent ">
                Skills:
              </span>
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary rounded-full  text-xs sm:text-sm text-warning font-bold shadow-2xl shadow-black "
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Skills Section */}
      </div>
    </div>
  );
};

export default UserCard;
