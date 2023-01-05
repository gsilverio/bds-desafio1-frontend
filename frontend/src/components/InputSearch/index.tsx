import "./style.css";

const InputSearch = () => {
  return (
    <div className="main-container-input">
      <div className="main-input">
        <div className="input-content">
          <input type="text" placeholder="Digite sua busca" />
          <button className="button-icon">
            <h6>BUSCAR</h6>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputSearch;
