import React, { useEffect, useState } from "react";
import { MdOutlineDone } from "react-icons/md";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

const PaymentSuccess = () => {
  const [authenticPayment, setAuthenticPayment] = useState(false);

  const searchQuery = useSearchParams()[0];
  const referenceNumber = searchQuery.get("reference");

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_HOST_URL_ENDPOINT
          }/api/paymentverification/${referenceNumber}`
        );

        console.log(response, "Response is getting or not")

        // if (response.data.success) {
        //   setAuthenticPayment(true);
        //   sendEmailWhilePaymentSuccess();
        // }
      } catch (error) {
        console.error("Error verifying payment:", error);
      }
    };

    if (referenceNumber) {
      verifyPayment();
    }
  }, [referenceNumber]);

  const sendEmailWhilePaymentSuccess = () => {
    axios
      .post(
        `${import.meta.env.VITE_HOST_URL_ENDPOINT}/api/sendemailtoadmin`,
        {
          formData: formData,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          console.log("Email sent successfully!");
        } else {
          console.error("Error sending email:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className=" h-screen flex items-center justify-center">
      {authenticPayment ? (
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
      ) : (
        // If payment is not authentic, display error message
        <div className=" h-screen flex items-center justify-center">
          <div className="border shadow-xl m-auto w-[90%] md:w-[50%] lg:w-[30%] h-auto p-5">
            <h1 className="text-3xl font-poppins text-center m-3 text-red-500 font-extrabold">
              Payment ID is not authentic
            </h1>
            <p className="text-slate-600 font-philosopher mt-4 text-center">
              The payment ID received is not authentic. Please contact support.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentSuccess;
