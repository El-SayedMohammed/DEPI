import axios from "axios";

export async function getProducts() {
  const { data } = await axios.get("https://dummyjson.com/products");
  return data.products;
}

export async function getProduct(id) {
  const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
  return data;
}
