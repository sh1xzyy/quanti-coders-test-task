import clsx from "clsx";
import "./HelpTypeCard.css";

export const HelpTypeCard = ({ icon, title, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={clsx("helpCard", isActive && "helpCardActive")}
  >
    <div className={clsx("helpCardIcon", isActive && "helpCardIconActive")}>
      {icon}
    </div>
    <span className={clsx("helpCardTitle", isActive && "helpCardTitleActive")}>
      {title}
    </span>
  </div>
);
