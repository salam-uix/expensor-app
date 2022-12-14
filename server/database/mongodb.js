import mongoose from "mongoose";

async function connect() {
  await mongoose.connect(
    "mongodb+srv://expense-app:U0N7iYIDZzTM4NHi@cluster0.oiptd.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("Mongodb connection successfully");
}

export default connect;
