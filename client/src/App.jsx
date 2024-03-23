import "./App.css";
import { fetchApi } from "./hooks/fetchApi/fetchApi";

function App() {
  const fetchProducts = async () => {
    const res = await fetchApi.get("/products");
    console.log(res);
  };
  fetchProducts();
  return (
    <>
      <h1>Hello World </h1>
    </>
  );
}

export default App;
