import React from "react";

const Description = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-gray-50 rounded shadow-md p-4 my-2">{children}</div>
    </>
  );
};

export default Description;
