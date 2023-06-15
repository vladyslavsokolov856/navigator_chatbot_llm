const mongoose = require("mongoose");

const dbConnect = async () => {
  if (mongoose.connection.readyState !== 0) {
    return mongoose;
  }
  try {
    return mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    throw error;
  }
};

export default dbConnect;
