const mongoose = require("mongoose");

const dbConnect = async () => {
  if (mongoose.connection.readyState !== 0) {
    return mongoose;
  }

  try {
    const mongoConnection = mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return mongoConnection;
  } catch (error) {
    throw error;
  }
};

export default dbConnect;
