import { Product } from "@/db/types"
import { database } from "../config/config";
import { z } from "zod";

const ProductValidation = z.object({
  name: z.string({
    required_error: "Name cant be empty",
  }),
  slug: z.string({
    required_error: "Slug cant be empty",
  }),
});

export default class ProductModel {
  static productCollection() {
    return database.collection<Product>("Products");
  }

  static async getAllProducts() {
    const data = await this.productCollection().find().toArray()
    
    return data;
  }
}