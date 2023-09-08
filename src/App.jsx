import { useState } from "react";

function App() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    maritalStatus: "",
    genre: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      const newData = { ...prev, [name]: value };
      return newData;
    });
  };

  const progress = () => {
    let value = 0;

    if (data.fullName) {
      const explodeString = data.fullName.split(" ");
      if (explodeString[1]) {
        value += 25;
      }
    }
    if (data.email) {
      const pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (pattern.test(data.email)) {
        value += 25;
      }
    }
    if (data.maritalStatus) {
      value += 25;
    }
    if (data.genre) {
      value += 25;
    }

    return value;
  };

  progress();

  const handleClick = () => {
    alert("Enviado");
    setData({ fullName: "", email: "", maritalStatus: "", genre: "" });
  };

  return (
    <div className="App">
      <h1>Form Progress</h1>
      <main>
        <div className="bar-container">
          <div className="bar" style={{ width: `${progress()}%` }}></div>
        </div>
        <div className="form-group">
          <label>Nome Completo</label>
          <input
            name="fullName"
            value={data.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>E-mail</label>
          <input name="email" value={data.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Estado Civil</label>
          <select
            name="maritalStatus"
            value={data.maritalStatus}
            onChange={handleChange}
          >
            <option value="">- selecione...</option>
            <option value="solteiro">Solteiro</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
          </select>
        </div>
        <div className="form-group">
          <label>Gênero</label>
          <div className="radios-container">
            <span>
              <input
                type="radio"
                name="genre"
                value="masculino"
                onChange={handleChange}
                checked={data.genre === "masculino"}
              />{" "}
              Masculino
            </span>
            <span>
              <input
                type="radio"
                name="genre"
                value="feminino"
                onChange={handleChange}
                checked={data.genre === "feminino"}
              />{" "}
              Feminino
            </span>
          </div>
        </div>
        <button onClick={handleClick} disabled={progress() !== 100}>
          Enviar Formulário
        </button>
      </main>
    </div>
  );
}

export default App;
