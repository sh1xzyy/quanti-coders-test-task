import { useState } from "react";
import "./RegistrationFormSection.css";
import clsx from "clsx";

export const RegistrationFormSection = () => {
  const [personType, setPersonType] = useState("physical");

  return (
    <div className="section">
      <div className="formContainer">
        <h1 className="mainTitle">Заповніть форму</h1>

        <div className="toggleContainer">
          <div className="toggleWrapper">
            <button
              onClick={() => setPersonType("physical")}
              className={clsx(
                "toggleButton",
                personType === "physical" && "toggleButtonActive"
              )}
            >
              Фіз. особа
            </button>
            <button
              onClick={() => setPersonType("legal")}
              className={clsx(
                "toggleButton",
                personType === "legal" && "toggleButtonActive"
              )}
            >
              Юр. особа
            </button>
          </div>
        </div>

        <div className="formCard">
          <div className="formGrid">
            <div>
              <label className="formLabel">Ім'я</label>
              <input className="formInput" />
            </div>
            <div>
              <label className="formLabel">Фамілія</label>
              <input className="formInput" />
            </div>
            <div>
              <label className="formLabel">Країна</label>
              <input className="formInput" />
            </div>
          </div>

          <div className="formGrid">
            <div>
              <label className="formLabel">Назва компанії, організації</label>
              <input className="formInput" />
            </div>
            <div>
              <label className="formLabel">Місто</label>
              <input className="formInput" />
            </div>
            <div>
              <label className="formLabel">Штат, район</label>
              <input className="formInput" />
            </div>
          </div>

          <div className="logoButtonContainer">
            <button className="logoButton">+ Логотип</button>
          </div>

          <div className="formGridTwo">
            <div>
              <label className="formLabel">Email-адрес</label>
              <input className="formInput" />
            </div>
            <div>
              <label className="formLabel">Адреса</label>
              <input className="formInput" />
            </div>
          </div>

          <div className="formGridTwo">
            <div>
              <label className="formLabel">Номер телефону</label>
              <input className="formInput" />
            </div>
            <div>
              <label className="formLabel">Поштовий індекс</label>
              <input className="formInput" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
