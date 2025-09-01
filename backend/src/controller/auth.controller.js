import { User } from "../models/user.model.js";

const userRegistrationCallback = async (req, res, next) => {
  try {
    //get data from body
    const { id, email, fullName, imageUrl } = req.body;
    // console.log(req.body);
    //check if user exist
    const user = await User.findOne({ clerkId: id });

    //sign up
    if (!user) {
      await User.create({
        clerkId: id,
        email,
        fullName,
        imageUrl,
      });
      return res.status(201).json({ message: "User Created", Id: id });
    } else {
      return res.status(200).json({ message: "User already exists", Id: id });
    }
  } catch (error) {
    // return res
    //   .status(500)
    //   .json({ message: "Registration failed", error: error.message });
    next(error);
  }
};

const userLogin = async (req, res) => {
  res.send("Auth route log in   ");
};

export { userRegistrationCallback, userLogin };
