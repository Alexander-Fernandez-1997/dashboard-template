import { RecentOrders } from "@/components/admin/inicio/RecentOrders";
import { Tittle } from "@/components/generic/Tittle";
import simpleFetch from "utils/simpleFetch";

export default async function Home() {
  const orders = await simpleFetch("orders", "ssr");
  return (
    <>
      <Tittle tittle="Listado de ordenes"></Tittle>
      <div className="row mt-3">
        <RecentOrders orders={orders} />
      </div>
    </>
  );
}
