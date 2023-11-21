import { instance } from "../server.js";

export const checkout = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.price) * 100,
      currency: "INR",
      receipt: "order_rcptid_11",
    };

    console.log(req.body, "Req dot body is there or not ");
    console.log(options, "OPTIONS is present ??");
    const order = await instance.orders.create(options);
    console.log("Order is here  ==> ", order);

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.log("Error during checkout:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

export const paymentVerification = async (req, res) => {
  console.log(req.body, "REQ body is there")

  

  try {
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
    });
  }
};

// import { instance } from "../server.js";

// export const checkout = async (req, res) => {
//   const options = {
//     amount: Number(req.body.priceOfAppointment * 100),
//     // amount: 3000,

//     currency: "INR",
//     receipt: "order_rcptid_11",
//   };
//   console.log(req.body, "Req dot body is there or not ")
//   const order = await instance.orders.create(options);
//   console.log("Order is here  ==> ", order);
//   res.status(200).json({
//     success: true,
//     order,
//   });
// };
