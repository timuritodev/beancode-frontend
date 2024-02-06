import "./InfoBlock.css";
import { useState } from "react";
import schema_2 from "../../images/schema_2.svg";
import arrow_closed from "../../images/arrow.svg";
import arrow_opened from "../../images/arrow__opend.svg";

const InfoBlock = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);

  const handleButtonClick = () => {
    setIsImageVisible(!isImageVisible);
  };
  return (
    <div className="info__block">
      <div className="info__block__container">
        <p className="info__digit">01</p>
        <div className="info__container">
          <h2 className="info__container__title">
            Поставки зеленого кофе и входной контроль
          </h2>
          <p className="info__container__text">
            Мы соблюдаем при входном контроле Российские и международные
            стандарты
          </p>
          <div className="button__container">
            <button className="button__info" onClick={handleButtonClick}>
              <span className="button__info__text">Схема контроля</span>
              {isImageVisible ? (
                <img className="button__info__img" src={arrow_closed} />
              ) : (
                <img className="button__info__img" src={arrow_opened} />
              )}
            </button>
            <button className="button__info">
              <span className="button__info__text">Документация</span>
            </button>
            {/* Todo Документация */}
          </div>
        </div>
        <p className="info__sort">40+ сортов</p>
      </div>
      {isImageVisible && (
        <img className="info__image" src={schema_2} alt="Control schema" />
      )}
    </div>
  );
};

export default InfoBlock;
