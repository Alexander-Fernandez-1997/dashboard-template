import Link from "next/link";
import React from "react";

export const Tittle = ({ tittle = "Listado", link = "", text = "" }) => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <h2 className="page-header">{tittle}</h2>
        {link !== "" && text !== "" && (
          <div>
            <Link href={link} className="btn btn-dark  ">
              {text}
            </Link>
          </div>
        )}
      </div>
      <hr className="mb-3" />
    </>
  );
};
