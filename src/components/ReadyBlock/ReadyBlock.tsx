import "./ReadyBlock.css";
import package_photo from "../../images/package.jpg";
import { Link } from "react-router-dom";
import { useResize } from "../../hooks/useResize";

const ReadyBlock = () => {
  const { width } = useResize();

  return (
    <div className="ready">
      <div className="ready__container">
        {width <= 767 ? (
          <>
            <div className="ready__text__container">
              <div className="ready__digit-title__container">
                <p className="ready__digit">04</p>
                <h2 className="ready__title">Готовая продукция</h2>
              </div>
              <p className="ready__text">
                Производим кофе на основе международных требований
              </p>
              <p className="ready__text_special">
                Specialty coffee association
              </p>
              <img className="ready__img" src={package_photo} />
              <Link to="/" className="ready__link">
                Требования к готовой продукции
              </Link>
              {/* Todo Требования к готовой продукции */}
            </div>
          </>
        ) : (
          <>
            <p className="ready__digit">04</p>
            <img className="ready__img" src={package_photo} />
            <div className="ready__text__container">
              <h2 className="ready__title">Готовая продукция</h2>
              <p className="ready__text">
                Производим кофе на основе международных требований
              </p>
              <p className="ready__text_special">
                Specialty coffee association
              </p>
              <Link to="/" className="ready__link">
                Требования к готовой продукции
              </Link>
              {/* Todo Требования к готовой продукции */}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ReadyBlock;
