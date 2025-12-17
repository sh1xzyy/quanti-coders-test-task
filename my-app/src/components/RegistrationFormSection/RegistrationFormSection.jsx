import { useState } from "react";
import "./RegistrationFormSection.css";
import clsx from "clsx";

export const RegistrationFormSection = () => {
  const [personType, setPersonType] = useState("physical");

  return (
    <div className="section">
      <div className="container">
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
            <div className="inputWrapper">
              <label className="formLabel">Ім'я</label>
              <input className="formInput" />
            </div>
            <div className="inputWrapper">
              <label className="formLabel">Фамілія</label>
              <input className="formInput" />
            </div>
            <div className={clsx("inputWrapper", "full")}>
              <label className="formLabel">Назва компанії, організації</label>
              <input className="formInput" />
              <div className="logoButtonContainer">
                <button className="logoButton">+ Логотип</button>
              </div>
            </div>
            <div className={clsx("inputWrapper", "full")}>
              <label className="formLabel">Email-адрес</label>
              <input className="formInput" />
            </div>
            <div className={clsx("inputWrapper", "full")}>
              <label className="formLabel">Номер телефону</label>
              <input className="formInput" />
            </div>
          </div>

          <div className="formGridTwo">
            <div className={clsx("inputWrapper", "full")}>
              <label className="formLabel">Країна</label>
              <input className="formInput" />
            </div>
            <div className="inputWrapper">
              <label className="formLabel">Мiсто</label>
              <input className="formInput" />
            </div>
            <div className="inputWrapper">
              <label className="formLabel">Штат, район</label>
              <input className="formInput" />
            </div>
            <div className={clsx("inputWrapper", "full")}>
              <label className="formLabel">Адреса</label>
              <input className="formInput" />
            </div>
            <div className="inputWrapper">
              <label className="formLabel">Поштовий iндекс</label>
              <input className="formInput" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
