import "./styles.css";
import { NavLink } from "react-router-dom";
const Button = () => {
  return (
    <div className="button-container">
      <div>
        <NavLink to="/products">
          <button>VER CATALOGO</button>
        </NavLink>
      </div>
      <div>
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
};

export default Button;
