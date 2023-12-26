import "./IntroBlock.css";

const IntroBlock = () => {
  //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  //   useEffect(() => {
  //     const handleMouseMove = (e:any) => {
  //       setMousePosition({ x: e.clientX, y: e.clientY });
  //     };

  //     document.addEventListener("mousemove", handleMouseMove);

  //     return () => {
  //       document.removeEventListener("mousemove", handleMouseMove);
  //     };
  //   }, []);
  return (
    <div className="intro__block">
      <div
        className="intro__background"
        // style={{
        //   transform: `translate(${mousePosition.x * 0.02}px, ${
        //     mousePosition.y * 0.02
        //   }px)`,
        // }}
      ></div>
      <div className="intro__content">
        <h1 className="intro__title">Обжариваем</h1>
        <p className="intro__text">
          кофе из лучших зёрен для бизнеса и людей по всей России
        </p>
        <button className="intro__button">Выбрать кофе</button>
      </div>
    </div>
  );
};

export default IntroBlock;
