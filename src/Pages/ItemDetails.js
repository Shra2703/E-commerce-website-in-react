import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { itemDetailsData } from "../data";

function ItemDetails() {
  const { id } = useParams();
  const item = itemDetailsData.find((item) => item.id === id);

  return (
    <>
      <div className="item-details page">
        <h3>{item.name}</h3>
        <img src={item.image} alt={item.name} />
        <ul className="specs">
          {item.specs.map((specs, i) => (
            <li key={i}>{specs}</li>
          ))}
        </ul>

        <p>{item.description}</p>
        <br /><br />
        <Link to = "/list">Back to List page</Link>
      </div>
    </>
  );
}

export default ItemDetails;
