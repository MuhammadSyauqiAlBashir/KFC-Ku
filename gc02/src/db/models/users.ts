import { User } from "@/db/types";
import { database } from "../config/config";
import { z } from "zod";
import bcryptPass from "@/db/helpers/bcrypt";
import { ObjectId } from "mongodb";

export const UserValidation = z.object({
  username: z
    .string({
      required_error: "Username cant be empty",
    })
    .min(1, { message: "Username Required" }),
  email: z
    .string({
      required_error: "Email cant be empty",
    })
    .email(),
  password: z
    .string({
      required_error: "Password cant be empty",
    })
    .min(5),
});

export default class UserModel {
  static userCollection() {
    return database.collection<User>("Users");
  }
  static async findUserByUsername(username: string) {
    const user = await this.userCollection().findOne({ username });
    return user;
  }
  static async findUserByEmail(email: string) {
    const user = await this.userCollection().findOne({ email });
    return user;
  }
  static async createUser(userData: User): Promise<User> {
    try {
      const checkUsername = await this.findUserByUsername(userData.username);
      if (checkUsername) throw new Error("Username already exists");
      const checkEmail = await this.findUserByEmail(userData.email);
      if (checkEmail) throw new Error("Email already exists");
      userData.password = bcryptPass.hashPassword(userData.password);
      const result = await this.userCollection().insertOne(userData);
      return { ...userData, _id: result.insertedId };
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  static async getUserProfile(userId: string) {
    const agg = [
      {
        $match: {
          _id: new ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "Wishlists",
          localField: "_id",
          foreignField: "userId",
          as: "Wishlists",
        },
      },
      {
        $lookup: {
          from: "Products",
          localField: "Wishlists.productId",
          foreignField: "_id",
          as: "WishDetail",
        },
      },
    ];
    const cursor = this.userCollection().aggregate(agg);
    const result = await cursor.toArray();
    return result[0]
  }
}
