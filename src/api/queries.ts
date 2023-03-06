import { useQuery } from "@tanstack/react-query";
import { IProduct } from "../interface/product";
import { IUser } from "../interface/user";
import { getProducts, getUsers } from "./endpoints";

export const productList = useQuery<IProduct[], any>({
  queryKey: ["productList"],
  queryFn: getProducts,
});

export const userList = useQuery<IUser[], any>({
  queryKey: ["userList"],
  queryFn: getUsers,
});
