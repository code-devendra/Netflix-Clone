import React from "react";

const Subscription = () => {
  return (
    <>
      <h3 className="text-lg lg:text-xl text-white text-center my-5">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-2 mb-16">
        <input
          type="text"
          className="inline-block min-w-[280px] md:w-96 p-3 bg-black bg-opacity-50 border border-slate-500 rounded-md"
          placeholder="Email Address"
        />
        <button className="btn bg-red-500 hover:bg-red-600 text-white px-5 py-3 h-[50px]  md:px-7 md:py-4 rounded-md font-bold">
          Get Started
        </button>
      </div>
    </>
  );
};

export default Subscription;
