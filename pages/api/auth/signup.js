import dbConnect  from "../../../utils/dbConnect.js";
import User from "../../../models/UserSchema.js";
// import rateLimiter from "../../../utils/rateLimiter.js";

async function handlePostRequest(req, res) {
  const { username, password, openAIAPIKey } = req.body;
  // try {
  //   await rateLimiter(req, res);
  // } catch (err) {
  //   return res.status(429).json({ error: "Too many requests" });
  // }

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw new Error("Signup failed.");
  }

  const newUser = new User({
    username,
    password,
    apiKey: openAIAPIKey,
  });

  try {

    await newUser.save();
  } catch(err) {
    throw err;
  }

  return res.status(201).json({
    user: {
      username: newUser.username,
    },
    credentials: {
      username: newUser.username,
      password: req.body.password,
    },
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  
  try {

    await dbConnect();
    const result = await handlePostRequest(req, res);
    return result;
  } catch (error) {
    console.log('error: ', error);
    return res.status(400).json({ error });
  }
}
