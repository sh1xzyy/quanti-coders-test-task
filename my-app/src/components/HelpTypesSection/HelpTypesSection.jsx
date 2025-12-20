import { useState } from "react";
import "./HelpTypesSection.css";
import { PaymentMethod } from "../PaymentMethod/PaymentMethod";
import { HelpTypeCard } from "../HelpTypeCard/HelpTypeCard";

export const HelpTypesSection = () => {
  const [activeType, setActiveType] = useState("financial");
  const [activePayment, setActivePayment] = useState("privat24");

  const helpTypes = [
    { id: "donate", icon: "✋", title: "Зробити" },
    { id: "financial", icon: "💳", title: "Фінансова\nдопомога" },
    { id: "material", icon: "📦", title: "Матеріальна\nдопомога" },
    { id: "volunteer", icon: "❤️", title: "Волонтерство" },
  ];

  const paymentMethods = [
    {
      id: "visa",
      icon: "💳",
      title: "VISA",
      subtitle: "Карта Visa/MasterCard",
    },
    { id: "privat24", title: "Приват24", subtitle: "Приват24" },
    {
      id: "terminal",
      icon: "📱",
      title: "Термінал",
      subtitle: "Термінали Україна",
    },
    { id: "webmoney", icon: "💰", title: "WebMoney", subtitle: "WebMoney" },
    { id: "paypal", icon: "🅿️", title: "PayPal", subtitle: "PayPal" },
  ];

  return (
    <div className="section">
      <div className="container">
        <h1 className="mainTitle">Види допомоги</h1>
        <p className="subtitle">Ви можете змінити вид допомоги</p>

        <div className="helpTypesGrid">
          {helpTypes.map((type) => (
            <HelpTypeCard
              key={type.id}
              icon={type.icon}
              title={type.title}
              isActive={activeType === type.id}
              onClick={() => setActiveType(type.id)}
            />
          ))}
        </div>

        <div className="paymentCard">
          <div className="paymentGrid">
            <div>
              <h3 className="sectionTitle">Спосіб оплати</h3>
              <div className="paymentMethodsGrid">
                {paymentMethods.map((method) => (
                  <PaymentMethod
                    key={method.id}
                    {...method}
                    isActive={activePayment === method.id}
                    onClick={() => setActivePayment(method.id)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="sectionTitle">Введіть наступні дані</h3>
              <div className="cardInputSection">
                <div className="cardInputContent">
                  <div className="cardInputLabel">Номер карти</div>
                  <div className="cardNumberGrid">
                    {[1, 2, 3, 4].map((i) => (
                      <input key={i} className="cardInput" maxLength="4" />
                    ))}
                  </div>
                  <div className="cardDetailsGrid">
                    <div>
                      <div className="cardInputLabel">Термін дії</div>
                      <input className="cardInput" />
                    </div>
                    <div>
                      <div className="cardInputLabel">CVC/CVV</div>
                      <input className="cardInput" maxLength="3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="buttonContainer">
          <button className="submitButton">Допомогти</button>
        </div>
      </div>
    </div>
  );
};
