import { Products } from "../../components/index";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useFilter } from "../../contexts/index";

export function ProductDetail() {
  const { productId } = useParams;
  const { categoryData } = useFilter();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/api/products/${productId}`);
      setDetail(response.data.product);
    })();
  }, []);

  const pDetail =
    categoryData.find((product) => product._id === productId) ?? null;

  return (
    <>
      <div style={{ color: "black", paddingTop: "10rem" }}>Product Details</div>
      <div>{pDetail.productDetail}</div>
    </>
  );
}
