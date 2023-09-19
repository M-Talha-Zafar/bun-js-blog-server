import { connect } from "mongoose";

const connectToMongoDB = () => {
  connect(Bun.env.MONGO_DB_CONNECTION_URI!)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((e) => {
      console.log("Could not connect to MongoDB", e.message);
    });
};

export default connectToMongoDB;
