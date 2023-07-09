import React from "react";
import { RecentOrderItem } from "./RecentOrderItem";

export const RecentOrders = ({ tittle = "", orders }) => {
  return (
    <div>
      {tittle !== "" && <h4>{tittle}</h4>}
      {orders.map((order) => {
        return <RecentOrderItem order={order} />;
      })}
    </div>
  );
};
