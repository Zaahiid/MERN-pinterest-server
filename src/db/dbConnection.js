import mongoose from "mongoose";

const dbConnection = () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/mernPinterest");
    console.log("Database connected 😍");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnection;
