import "./RoastBlock.css";
import coffee_machine from "../../images/coffe_machine.jpg";
import { Link } from "react-router-dom";
import { useResize } from "../../hooks/useResize";

const RoastBlock = () => {
  const { width } = useResize();

  return (
    <div className="roast__block">
      <img className="roast__img" src={coffee_machine} alt="roast machine" />
      <div className="roast__overlay"></div>
      <div className="roast__block__container">
        <div className="roast__container">
          <div className="roast__digit-title__container">
            <p className="roast__digit">02</p>
            <h2 className="roast__title">
              Процесс обжарки
              <br /> и сортировки
            </h2>
          </div>
          {width < 767 ? (
            <>
              <p className="roast__text">
                Мы обжариваем наши зёрна на оборудовании Giesen. Это
                оборудование, которое отличается высоким качеством и удобством
                использования.Единовременная загрузка зеленого зёрна у этого
                ростера составляетот 15 кг до 30 кг. Максимально за час работы
                нам удаётся обжарить 120 кг кофе.
              </p>
              <Link to="" className="roast__link">
                Документация
              </Link>
            </>
          ) : (
            <>
              <p className="roast__text">
                Мы обжариваем наши зёрна на оборудовании Giesen.
                <br />
                Это оборудование, которое отличается высоким качеством и
                удобством
                <br />
                использования.
                <br /> Единовременная загрузка зеленого зёрна у этого ростера
                составляет
                <br /> от 15 кг до 30 кг. Максимально за час работы нам удаётся
                обжарить
                <br /> 120 кг кофе.
              </p>
              <Link to="" className="roast__link">
                Требования к технологическому процессу
              </Link>
            </>
          )}
          {/* Todo Требования к технологическому процессу */}
        </div>
      </div>
    </div>
  );
};

export default RoastBlock;
