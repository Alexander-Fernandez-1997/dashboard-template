import React from "react";
import { ProductListItem } from "./ProductListItem";
import { ProductListTittle } from "./ProductListTittle";

export const ProductList = () => {
  return (
    <table className="table">
      <ProductListTittle></ProductListTittle>
      <tbody>
        <ProductListItem></ProductListItem>
      </tbody>
    </table>
  );
};
