/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./MainPage.css";
import arrow_closed from "../../images/arrow.svg";
import arrow_opened from "../../images/arrow__opend.svg";
import schema_2 from "../../images/schema_2.svg";

const MainPage = () => {
  //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  //   useEffect(() => {
  //     const handleMouseMove = (e:any) => {
  //       setMousePosition({ x: e.clientX, y: e.clientY });
  //     };

  //     document.addEventListener("mousemove", handleMouseMove);

  //     return () => {
  //       document.removeEventListener("mousemove", handleMouseMove);
  //     };
  //   }, []);
  const [isImageVisible, setIsImageVisible] = useState(false);

  const handleButtonClick = () => {
    setIsImageVisible(!isImageVisible);
  };
  return (
    <section className="main">
      <div className="main__container">
        <div className="intro__block">
          <div
            className="intro__background"
            // style={{
            //   transform: `translate(${mousePosition.x * 0.02}px, ${
            //     mousePosition.y * 0.02
            //   }px)`,
            // }}
          ></div>
          <div className="intro__content">
            <h1 className="intro__title">Обжариваем</h1>
            <p className="intro__text">
              кофе из лучших зёрен для бизнеса и людей по всей России
            </p>
            <button className="intro__button">Выбрать кофе</button>
          </div>
        </div>
        <div className="text__block">
          <h2 className="text__title">СТАБИЛЬНЫЙ ВКУС В КАЖДОЙ ЧАШКЕ</h2>
          <p className="text__text">
            ВЫСТРОЕННЫЕ ПРОЦЕССЫ В КОМПАНИИ ПОЗВОЛЯЮТ ДОСТИЧЬ ПОВТОРЯЕМЫХ
            РЕЗУЛЬТАТОВ
          </p>
        </div>
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
              </div>
            </div>
            <p className="info__sort">40+ сортов</p>
          </div>
          {isImageVisible && (
            <img className="info__image" src={schema_2} alt="Control schema" />
          )}
        </div>
        <div className="roast__block">
            <div className="roast__background"></div>
          <div className="roast__block__container"></div>
            <p className="roast__digit">02</p>
            <div className="roast__container">
              <h2 className="roast__title">Процесс обжарки и сортировки</h2>
              <p className="roast__text">
                Мы обжариваем наши зёрна на оборудовании Giesen. Это
                оборудование, которое отличается высоким качеством и удобством
                использования. Единовременная загрузка зеленого зёрна у этого
                ростера составляет от 15 кг до 30 кг. Максимально за час работы
                нам удаётся обжарить 120 кг кофе.
              </p>
              <button className="button__roast">
                <span className="button__roast__text">
                  Требования к технологическому процессу
                </span>
              </button>
            </div>
          </div>
        </div>
    </section>
  );
};

export default MainPage;
