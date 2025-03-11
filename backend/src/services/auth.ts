import User from "../models/user";
import { hashPassword, comparePassword } from "../utils/bcrypt";
import { generateToken } from "../utils/jwt";

export const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  const hashedPassword = await hashPassword(password);
  const user = await User.create({ username, email, password: hashedPassword });
  return { message: "User registered successfully", userId: user.id };
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user || !(await comparePassword(password, user.password)))
    throw new Error("Invalid credentials");
  return {
    token: generateToken(user.id, user.role),
    userId: user.id,
    role: user.role,
  };
};
