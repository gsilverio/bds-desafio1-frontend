import "./styles.css";
import CardImagem from "../../assets/images/car-card.png";
const ProductCard = () => {
  return (
    <div className="base-card main-container-card">
      <div className="image-card">
        <img src={CardImagem} alt="" />
      </div>
      <div className="card-text">
        <h6>Audi Supre TT</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
        <button>
          <h6>COMPRAR</h6>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
