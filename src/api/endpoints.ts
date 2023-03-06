import axios from "axios";
import { IProduct } from "../interface/product";
import { IUser } from "../interface/user";

const MAIN_URI = "https://fakestoreapi.com";

export const getProducts = async (): Promise<IProduct[]> => {
  try {
    return (await axios.get<IProduct[]>(`${MAIN_URI}/products`)).data;
  } catch (error) {
    throw new Error("خطا در دریافت اطلاعات");
  }
};

export const getUsers = async (): Promise<IUser[]> => {
  try {
    return (await axios.get<IUser[]>(`${MAIN_URI}/users`)).data;
  } catch (error) {
    throw new Error("خطا در دریافت اطلاعات");
  }
};
