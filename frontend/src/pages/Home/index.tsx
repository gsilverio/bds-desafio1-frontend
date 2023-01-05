import NavBar from "../../components/NavBar";
import Button from "../../components/Button";
import { ReactComponent as ImageCar } from "../../assets/images/carImage.svg";
import "./styles.css";
const Home = () => {
  return (
    <>
      <div className="main-container">
        <div className="base-card card-container">
          <div className="image-container">
            <ImageCar />
          </div>
          <div className="container-text">
            <h3>O carro perfeito para você</h3>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>
        <div className="button-container-home">
          <Button />
        </div>
      </div>
    </>
  );
};

export default Home;
