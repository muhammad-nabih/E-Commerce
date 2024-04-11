
import { useEffect } from "react"; // استيراد useEffect
import { Categories } from "./components/Categories/Categories";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import { fetchApi } from "./hooks/fetchApi/fetchApi";
import SidebarProvider from "./contexts/sidebarContext/SidebarContext";

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetchApi.get("/products");
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []); // تمرير مصفوفة فارغة كتابيه لضمان تنفيذ الكود مرة واحدة عندما يتم تحميل المكون

  return (
    <>
      <SidebarProvider>
        <Navbar />
        <Categories />
        <Landing />
        <Products />
      </SidebarProvider>
    </>
  );
}

export default App;
