import { useEffect } from "react";
import "./AdvicePopup.scss";

const AdvicePopup = ({ advicePopupActive, setAdvicePopupActive, advicePopupText }) => {
  useEffect(() => {
    if (advicePopupActive) {
      const popup = document.querySelector(".advice-popup");
      popup.classList.add("advice-popup--active");

      setTimeout(() => {
        popup.classList.remove("advice-popup--active");
        setAdvicePopupActive(false);
      }, 4000);
    }
  }, []);
  return (
    <div className="advice-popup advice-popup--active">
      <p>{advicePopupText}</p>
    </div>
  );
};

export default AdvicePopup;
