function ShopItemCard({ item }) {
  const inStock = item.quantity > 0;

  return (
    <div className="shop-card">
      <img
        className="shop-card-image"
        src={item.imageURL}
        alt={item.name}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/200?text=No+Image";
        }}
      />

      <div className="shop-card-body">
        <div className="shop-card-header">
          <h3 className="shop-card-name">{item.name}</h3>
          {item.isRaffle && <span className="shop-card-badge">Raffle</span>}
        </div>

        <p className="shop-card-price">{item.price} pts</p>

        <p className={`shop-card-stock ${inStock ? "" : "shop-card-stock-empty"}`}>
          {inStock ? `${item.quantity} in stock` : "Out of stock"}
        </p>
      </div>
    </div>
  );
}

export default ShopItemCard;