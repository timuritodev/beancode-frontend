/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import "./MainPage.css";
import PackageBlock from "../../components/PackageBlock/PackageBlock";
import ReadyBlock from "../../components/ReadyBlock/ReadyBlock";
import TreatmentBlock from "../../components/TreatmentBlock/TreatmentBlock";
import RoastBlock from "../../components/RoastBlock/RoastBlock";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import TextBlock from "../../components/TextBlock/TextBlock";
import IntroBlock from "../../components/IntroBlock/IntroBlock";

const MainPage = () => {


  return (
    <section className="main">
      <div className="main__container">
        <IntroBlock />
        <TextBlock />
        <InfoBlock />
        <RoastBlock />
        <PackageBlock />
        <ReadyBlock />
        <TreatmentBlock />
      </div>
    </section>
  );
};

export default MainPage;
