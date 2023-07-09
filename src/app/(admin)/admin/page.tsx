import { Panels } from "@/components/admin/estadisticas/Panels";
import { RecentOrders } from "@/components/admin/inicio/RecentOrders";
import simpleFetch from "utils/simpleFetch";

export default async function Home() {
  const orders = await simpleFetch("orders", "ssr");
  return (
    <>
      <h2 className="page-header">Estadisticas generales</h2>
      <hr className="mb-3" />

      <Panels></Panels>
      <div className="row mt-3">
        <RecentOrders tittle={"Recent orders"} orders={orders} />
      </div>
    </>
  );
}
