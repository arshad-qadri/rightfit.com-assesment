import React from "react";

const Pagination = () => {
  const pages = [1, 2, 3, 4];
  const activePage = 1
  return (
    <div className=" flex justify-center items-center w-full my-5">
      {pages.map((page) => (
        <button className={`text-sm w-8 h-8 ${activePage===page &&"bg-[#D9D9D9]"} m-1 rounded-full flex justify-center items-center`}>{page}</button>
      ))}
    </div>
  );
};

export default Pagination;
