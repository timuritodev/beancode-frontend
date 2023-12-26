import "./TreatmentBlock.css";

const TreatmentBlock = () => {
  return (
    <div className="treatment">
      <div className="treatment__container">
        <p className="treatment__digit">05</p>
        <div className="treatment__text__container">
          <h2 className="treatment__title">
            Специальный подход<br/> к оптовым покупателям
          </h2>
          <p className="treatment__text">
            Выстраиваем долгосрочные отношения с оптовыми покупателями на основе<br/>
            индивидуального подбора смеси, формульного ценообразования.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TreatmentBlock;
