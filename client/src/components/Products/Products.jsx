import styles from "./Products.module.css";
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch/useFetch";
import { Button } from "flowbite-react";
import { GrFavorite } from "react-icons/gr";
import { MdShoppingCart } from "react-icons/md";

const Products = () => {
  const urlImage = import.meta.env.VITE_APP_URL;
  const [products, setProducts] = useState([]);
  const { data, loading } = useFetch("products");
  useEffect(() => {
    data && setProducts(data);
  }, [data]);

  const dataProducts = products.map((product) => {
    return (
      <div key={product.id} className={styles.card}>
        <div className={styles.imageBox}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${urlImage}${product.attributes.image.data.attributes.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>

        <div className={styles.content}>
          <h4 className={styles.title}>{product.attributes.title}</h4>
          <p className={styles.desc}>
            <span className={styles.info}>{product.attributes.desc}</span>
          </p>
          <span className={styles.price}>
            {product.attributes.price} دولاراً
          </span>
        </div>
        <div className="flex items-center gap-2 my-2 px-2">
          <Button
            className=" flex grow items-center h-10"
            gradientDuoTone="pinkToOrange"
          >
            <MdShoppingCart />

            <span> شراء الأن</span>
          </Button>
          <Button color={'failure'} className="grow h-10 flex justify-center items-center bg-red-600">
            {" "}
            <GrFavorite fontSize={"1.8rem"} />
          </Button>
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
