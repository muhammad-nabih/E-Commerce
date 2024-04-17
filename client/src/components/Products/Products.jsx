import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch/useFetch";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import styles from "./Products.module.css";
import { FaShoppingCart } from "react-icons/fa";
import Star from "../Star/Star";
import { SkeletonProduct } from "../SkeletonProduct/SkeletonProduct";

const Products = () => {
  const urlImage = import.meta.env.VITE_APP_URL;
  const { data, loading } = useFetch("products");
  const [products, setProducts] = useState(data || []);

  useEffect(() => {
    if (data) setProducts(data);
  }, [data]);

  const renderProducts = () => {
    return products.map((product, index) => (
      <div className={styles.card} key={index}>
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
            <div className="flex gap-1 items-center flex-row-reverse ">
              <Star stars={product.attributes.rating} />
            </div>
            <span className="bg-sky-300 text-black px-3 rounded-md">
              {product.attributes.rating.toFixed(1)}
            </span>
          </div>
          <div className={styles.shopping}>
            <div className={styles.price}>
              {product.attributes.price} <span>دولاراً</span>
            </div>
            <Button>
              <div className="flex gap-1 items-center">
                <FaShoppingCart />
                <span>إضافة للسلة</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    ));
  };

  const renderSkeletons = () => {
    return (
      <>
        {[...Array(6)].map((_, index) => (
          <SkeletonProduct key={index} />
        ))}
      </>
    );
  };

  return (
    <>
      {loading ? (
        <div className={styles.productsContainer}>{renderSkeletons()}</div>
      ) : (
        <div className={styles.productsContainer}>{renderProducts()}</div>
      )}
    </>
  );
};

export default Products;
