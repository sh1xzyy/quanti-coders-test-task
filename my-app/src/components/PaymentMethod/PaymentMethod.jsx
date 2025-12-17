import clsx from "clsx";
import "./PaymentMethod.css";

export const PaymentMethod = ({ icon, title, subtitle, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={clsx("paymentMet", isActive && "paymentMethodActive")}
  >
    <div className="paymentMethodContent">
      <div className="paymentMethodIcon">{icon}</div>
      <div className="paymentMethodTitle">{title}</div>
      {subtitle && <div className="paymentMethodSubtitle">{subtitle}</div>}
    </div>
  </div>
);
