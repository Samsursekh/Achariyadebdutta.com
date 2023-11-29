import mongoose from "mongoose";

export const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.VITE_MONGO_URL);
  // console.log(`Mongo is connected wuth DB ${connection.host}`)
  console.log(`Mongo is connected wuth DB`);
};
