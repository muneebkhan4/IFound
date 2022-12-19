import { useState, React } from "react";
import NavBar from "../../../sections/NavBar";

const ReolvedCases = () => {
  const Users = [
    {
      name: "Deepak",
      rollNo: "123",
    },
    {
      name: "Yash",
      rollNo: "124",
    },
    {
      name: "Raj",
      rollNo: "125",
    },
    {
      name: "Rohan",
      rollNo: "126",
    },
    {
      name: "Puneet",
      rollNo: "127",
    },
    {
      name: "Vivek",
      rollNo: "128",
    },
    {
      name: "Aman",
      rollNo: "129",
    },
  ];

  return (
    <div>
      <NavBar />
      <h1 className="center fonts">Resolved cases</h1>
      {Users.map((x) => (
        <h1 className="center fonts" key={x.rollNo}>
          Name: {x.name} RollNo. {x.rollNo}
        </h1>
      ))}
    </div>
  );
};

export default ReolvedCases;
