import React from "react";
import { MdOutlineDone } from "react-icons/md";

import { Link, useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  console.log(searchQuery, "Search query...");

  const referenceNumber = searchQuery.get("reference");

  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="border shadow-xl m-auto w-[90%] md:w-[50%] lg:w-[30%] h-auto p-5 ">
        <div className="border-[4px] border-blue-500 rounded-full w-[100px] h-[100px] flex justify-center items-center m-auto ">
          <MdOutlineDone size={90} className="m-auto text-green-500 " />
        </div>
        <div className="m-auto">
          <h1 className="text-3xl font-poppins text-center m-3 text-green-500 font-extrabold">
            Payment Successful!
          </h1>
          <h3 className="text-gray-700 font-sans font-semibold text-center">
            Payment ID :<span> {referenceNumber}</span>
          </h3>
          <p className="text-slate-600 font-philosopher mt-4 text-center">
            Will get back to you soon.{" "}
            <span className="text-blue-500 font-bold">Thank You.</span>
          </p>
          <div className="text-right w-[300px] m-auto mt-4">
            <Link to="/">
              <button className=" underline hover:underline-offset-2">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
