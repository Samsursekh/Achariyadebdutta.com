import React from "react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  console.log(searchQuery, "Search query...");

  const referenceNumber = searchQuery.get("reference");

  return (
    <div>
      <div style={{ border: "2px solid red", margin: "auto", padding: "10px" }}>
        <center>Order Successfull</center>
        <h3>
          Reference No :
          <span style={{ marginLeft: "10px" }}> {referenceNumber}</span>
        </h3>
      </div>
    </div>
  );
};

export default PaymentSuccess;
