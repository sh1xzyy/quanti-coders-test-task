import clsx from "clsx";
import "./HelpTypeCard.css";

export const HelpTypeCard = ({ icon, title, isActive, onClick }) => (
  <div onClick={onClick} className="helpCard">
    <div
      className={clsx(
        "helpCardIconWrapper",
        isActive && "helpCardIconWrapperActive"
      )}
    >
      <div className={clsx("helpCardIcon", isActive && "helpCardIconActive")}>
        {icon}
      </div>
    </div>
    <span className={clsx("helpCardTitle", isActive && "helpCardTitleActive")}>
      {title}
    </span>
  </div>
);
