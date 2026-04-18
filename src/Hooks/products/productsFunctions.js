import axios from "axios";

export async function getProducts() {
  let { data } = await axios.get("https://dummyjson.com/products");
  return data.products;
}
