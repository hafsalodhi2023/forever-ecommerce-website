// Import required modules
import mongoose from "mongoose";
import debug from "debug";

// Create a debug instance for logging
const debugging = debug("development:config:mongodb-connection");

/**
 * Establishes a connection to the MongoDB database
 * @async
 * @function connectDB
 * @throws {Error} If connection fails
 */
const connectDB = async () => {
  try {
    // Attempt to connect to the MongoDB database
    await mongoose.connect(`${process.env.MONGODB_URI}/forever`);
    // Log successful connection
    debugging("Database connection established!");
  } catch (error) {
    // Log error message if connection fails
    debugging("Error connecting to database:", error.message);
    // Rethrow the error for handling by the caller
    throw error;
  }
};

// Export the connectDB function as the default export
export default connectDB;
