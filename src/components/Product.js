import React from "react";
import { Card } from "react-bootstrap";

function Product({ product }) {
  return (
    <div>
      <Card className="my-3 p-3 rouded">
        <a href={`/product/${product._id}`}>
          <Card.Img src={product.image} />
        </a>
      </Card>
    </div>
  );
}

export default Product;
