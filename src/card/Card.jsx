import React from "react";

const Card = () => {
  let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    gender: "boy",
    profession: "web-developer",
    hobbies: ["football", "basketball", "cricket"],
  };
  return (
    <>
    
      <div className="h-60 w-50 border-4 rounded-xl border-[#01EEFF]  absolute	overflow-hidden	bg-[#000000]   	">
        <div className="bg-[#01EEFF] h-44 w-44 rounded-full relative top-[-30%] left-[-35%]"></div>
        <div className="h-22 w-24 relative top-[-66%] left-[23%] z-10 border-black border-2 rounded-full">
          <img
            src={"https://avatar.iran.liara.run/public/" + person.gender}
            alt="profile"
          />
        </div>
      </div>
        <p className=" text-lg">hjdfh</p>
    </>
  );
};

export default Card;
