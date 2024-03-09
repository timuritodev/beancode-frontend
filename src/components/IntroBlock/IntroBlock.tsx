/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import "./IntroBlock.css";
import { useEffect, useState } from "react";
import { useResize } from "../../hooks/useResize";

const IntroBlock = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { width } = useResize();
  const isAnimationEnabled = width >= 1280;

  useEffect(() => {
    if (isAnimationEnabled) {
      const handleMouseMove = (e: any) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      document.addEventListener("mousemove", handleMouseMove);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isAnimationEnabled]);

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
        <h1 className="intro__title">
          вкусный
          <br /> КОФЕ В ЗЕРНАХ
        </h1>
        <p className="intro__text">
          С БЕСПЛАТНОЙ ДОСТАВКОЙ <br />
          до двери
        </p>
        <Link to="catalog" className="intro__button">
          Выбрать кофе
        </Link>
      </div>
    </div>
  );
};

export default IntroBlock;
