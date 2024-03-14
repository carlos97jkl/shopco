"use server";

export async function getProduct() {
  const response = await fetch("https://api.escuelajs.co/api/v1/products/8");
  return response.json();
}
