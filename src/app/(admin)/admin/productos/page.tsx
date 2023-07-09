import { ProductList } from "@/components/admin/productos/ProductList";
import { Tittle } from "@/components/generic/Tittle";

export default async function Home() {
  // const products =
  return (
    <>
      <Tittle tittle="Listado de Productos"></Tittle>
      <ProductList></ProductList>
    </>
  );
}
