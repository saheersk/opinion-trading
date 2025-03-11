import dotenv from "dotenv";
dotenv.config();

export const MONGO_URI: string = process.env.MONGO_URI || "";
export const SECRET_KEY: string = process.env.SECRET_KEY || "";
export const PORT: number = parseInt(process.env.PORT || "3000");
