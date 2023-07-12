import mongoose from "mongoose";

export const connectDB = () => {
  try {
    mongoose.connect(
      process.env.MONGO_URI ||
        "mongodb+srv://itsrusty:JavaScript2003@secrets-db.ohfrh58.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("conectado".blue)
  } catch (error) {
    console.error(error)
    throw error
  }
};
