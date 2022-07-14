import { products } from "./constants/data.js";
import product from "./model/product-Schema.js";
const DefaultData = async () => {
  try {
    // await Product.deleteMany({});
    await product.insertMany(products);

    console.log("Data imported Successfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default DefaultData;
