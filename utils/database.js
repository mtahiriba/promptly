import mongoose from "mongoose";

let isconnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isconnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "share_prompt",
        useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${db.connection.host}`);
    isconnected = true;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};
