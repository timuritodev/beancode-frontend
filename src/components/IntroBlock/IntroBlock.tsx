/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import "./IntroBlock.css";
import { useEffect, useState } from "react";

const IntroBlock = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMouseMove = (e: any) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      document.addEventListener("mousemove", handleMouseMove);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
  return (
    <div className="intro__block">
      <div
        className="intro__background"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${
            mousePosition.y * 0.02
          }px)`,
        }}
      ></div>
      <div className="intro__content">
        <h1 className="intro__title">Обжариваем</h1>
        <p className="intro__text">
          кофе из лучших зёрен для бизнеса и людей по всей России
        </p>
        <Link to="catalog" className="intro__button">
          Выбрать кофе
        </Link>
      </div>
    </div>
  );
};

export default IntroBlock;
