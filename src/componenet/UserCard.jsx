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
          className="max-w-[] max-h-140 w-120 h-140 "
        />
      </figure>

      <div className="card-body text-center absolute z-100 py-[140%] md:py-[120%] lg:py-[110%] xl:py-[110%] w-[120%] ">
        <div className="mt-2 text-sm sm:text-base md:text-lg bg-black/50 rounded-2xl ">
          <h2 className="text-xl text-accent sm:text-2xl md:text-3xl font-bold">
            {data.firstName + " " + data.lastName}
          </h2>

          <div className="flex justify-center text-warning  gap-3">
            
            <span >
              {data.city}, {data.country} 
            </span>
            
          </div>

          <p className="text-info px-2 text-sm text-wrap font-bold line-clamp-2">
            {data.about}
          </p>
        </div>

        {/* Skills Section */}
      </div>
    </div>
  );
};

export default UserCard;
