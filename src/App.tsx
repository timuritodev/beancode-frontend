import Countdown from "react-countdown";
import { FC } from "react";
import "./App.css";

export const App: FC = () => {
  return (
    <section className="main">
      <div className="main__container">
        <h1 className="main__text">
          До открытия интернет магазина вкусного кофе свежей обжарки осталось
        </h1>
        <Countdown date="2024-01-30" className="countdown-timer" />
      </div>
    </section>
  );
};
