import { useState, useEffect } from "react";
import { getShopItems } from "../services/api.js";
import ShopItemCard from "../components/ShopItemCard.jsx";
import "./ShopPage.css";

function ShopPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getShopItems()
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="shop-status">Loading shop...</div>;
  }

  if (error) {
    return <div className="shop-status">Couldn&apos;t load the shop: {error}</div>;
  }

  return (
    <div className="shop-page">
      <h1 className="shop-title">Shop</h1>

      <div className="shop-grid">
        {items.map((item) => (
          <ShopItemCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ShopPage;