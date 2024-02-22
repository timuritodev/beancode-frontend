import "./PackageBlock.css";
import package_photo from "../../images/package.jpg";

const PackageBlock = () => {
  return (
    <div className="package">
      <div className="package__container">
        <div className="package__text__container">
          <div className="package__digit-title__container">
            <p className="package__digit">03</p>
            <h2 className="package__title">Процесс дозировки и упаковки</h2>
          </div>
          <p className="package__text">
            Упаковочное образование разработано и произведено российской
            <br />
            компанией МАКИЗ
          </p>
        </div>
        <img className="package__img" src={package_photo} />
      </div>
    </div>
  );
};

export default PackageBlock;
