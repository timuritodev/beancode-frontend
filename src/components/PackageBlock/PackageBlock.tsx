import "./PackageBlock.css";
import package_photo from "../../images/package.jpg";

const PackageBlock = () => {
  return (
    <div className="package">
      <div className="package__container">
        <p className="package__digit">03</p>
        <div className="package__text__container">
          <h2 className="package__title">Процесс упаковки</h2>
          <p className="package__text">
            Упаковочное образование разработано и произведено российской<br/>
            компанией МАКИЗ
          </p>
        </div>
        <img className="package__img" src={package_photo} />
      </div>
    </div>
  );
};

export default PackageBlock;
