import { useState, useEffect } from "react";
import { getShopItems } from "../services/api.js";
import OceanBackground from "../components/OceanBackground.jsx";
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
    return (
      <div className="page theme-treasure">
        <OceanBackground variant="treasure" />
        <div className="page-content">
          <div className="shop-status">Loading shop...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page theme-treasure">
        <OceanBackground variant="treasure" />
        <div className="page-content">
          <div className="shop-status">Couldn&apos;t load the shop: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page theme-treasure">
      <OceanBackground variant="treasure" />
      <div className="page-content">
        <h1 className="shop-title">Shop</h1>
        <div className="shop-grid">
          {items.map((item) => (
            <ShopItemCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;