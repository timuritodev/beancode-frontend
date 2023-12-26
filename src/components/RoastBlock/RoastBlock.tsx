import "./RoastBlock.css";
import coffee_machine from "../../images/coffe_machine.jpg";

const RoastBlock = () => {
  return (
    <div className="roast__block">
      <img className="roast__img" src={coffee_machine} alt="roast machine" />
      <div className="roast__overlay"></div>
      <div className="roast__block__container">
        <p className="roast__digit">02</p>
        <div className="roast__container">
          <h2 className="roast__title">
            Процесс обжарки
            <br /> и сортировки
          </h2>
          <p className="roast__text">
            Мы обжариваем наши зёрна на оборудовании Giesen.
            <br />
            Это оборудование, которое отличается высоким качеством и удобством
            <br />
            использования.
            <br /> Единовременная загрузка зеленого зёрна у этого ростера
            составляет
            <br /> от 15 кг до 30 кг. Максимально за час работы нам удаётся
            обжарить
            <br /> 120 кг кофе.
          </p>
          <button className="button__roast">
            <span className="button__roast__text">
              Требования к технологическому процессу
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoastBlock;
