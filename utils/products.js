// utils/products.js
export async function getAllProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.products; // Return only the products array
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Something went wrong while fetching products");
  }
}
