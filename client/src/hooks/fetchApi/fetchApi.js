import axios from "axios";
// const fetchProducts = async () => {
//   const res = await axios.get(
//     import.meta.env.VITE_API_URL + "/products?populate=*",
//     {
//       headers: {
//         Authorization: `bearer ${import.meta.env.VITE_API_TOKEN}`,
//       },
//     }
//   );
//   // const data = res.data.data[0].attributes;
//   // const urlImage = res.data.data[0].attributes.image.data.attributes.url
//   console.log(res.data.data[0].attributes.image.data.attributes.url);
// };

// fetchProducts();

export const fetchApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
  // const data = res.data.data[0].attributes;
  // const urlImage = res.data.data[0].attributes.image.data.attributes.url
  //   console.log(res.data.data[0].attributes.image.data.attributes.url);
});
