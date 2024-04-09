import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch/useFetch";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import styles from "./Products.module.css";
import {  FaShoppingCart } from "react-icons/fa";
import Star from "../Star/Star";

const Products = () => {
  const urlImage = import.meta.env.VITE_APP_URL;
  const [products, setProducts] = useState([]);
  const { data, loading } = useFetch("products");
  useEffect(() => {
    data && setProducts(data);
  }, [data]);

  const dataProducts = products.map((product) => {
    return (
      <div className={styles.card} key={product.attributes.id}>
        <div className={styles.imgBox}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${urlImage}${product.attributes.image.data.attributes.url})`,
            }}
          ></div>
        </div>
        <div className="px-5 pb-5">
          <Link to={"/"}>
            <h3 className={styles.title}>{product.attributes.title}</h3>
          </Link>
          <div className={styles.rating}>
            <div className="flex gap-1 items-center ">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <span className="bg-sky-300 text-black  px-3 rounded-md">5.0</span>
          </div>
          <div className={styles.shopping}>
            <div className={styles.price}>
              {product.attributes.price}
              <span>دولاراً</span>
            </div>
            <Button>
              <div className="flex gap-1 items-center">
                <FaShoppingCart />
                <span>إضافة للسلة</span>
              </div>
            </Button>
          </div>{" "}
        </div>
      </div>
    );
  });

  return (
    <>
      {loading ? (
        "Loading....."
      ) : (
        <div>
          <h2 className="bg-sky-950	text-3xl my-2 text-zinc-50 font-extrabold p-2 text-center">
            قسم المنتجات
          </h2>
          <div className={styles.productsContainer}>{dataProducts}</div>
        </div>
      )}
    </>
  );
};
export default Products;
