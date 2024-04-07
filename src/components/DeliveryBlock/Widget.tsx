import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

export const Widget = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@cdek-it/widget@3";
    script.async = true;
    script.onload = () => {
      setScriptLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (scriptLoaded) {
      initWidget();
    }
  }, [scriptLoaded]);

  const initWidget = () => {
    if (window.CDEKWidget) {
      new window.CDEKWidget({
        from: "Москва",
        root: "cdek-map",
        apiKey: "c71385a4-e8d4-4e71-8c0d-f0d16956e3ba",
        servicePath: "https://beancode.ru/service.php",
        defaultLocation: "Москва",
        hideDeliveryOptions: {
          office: false,
          door: true,
        },
      });
    }
  };

  return (
    <div>
      <Helmet>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@cdek-it/widget@3"
        ></script>
      </Helmet>
      <div id="cdek-map" style={{ width: "756px", height: "600px" }}></div>
    </div>
  );
};

// import React, { useEffect } from "react";
// import { Helmet } from "react-helmet";

// export const Widget = () => {
//   const initWidget = () => {
//     if (window.CDEKWidget) {
//       new window.CDEKWidget({
//         from: "Новосибирск",
//         root: "cdek-map",
//         apiKey: "c71385a4-e8d4-4e71-8c0d-f0d16956e3ba",
//         servicePath: "https://beancode.ru/service.php",
//         defaultLocation: "Новосибирск",
//       });
//     }
//   };

//   useEffect(() => {
//     initWidget(); // Вызываем инициализацию виджета при первом отображении компонента
//   }, []);

//   return (
//     <div>
//       <Helmet>
//         <script
//           type="text/javascript"
//           src="https://cdn.jsdelivr.net/npm/@cdek-it/widget@3"
//         ></script>
//       </Helmet>
//       <div id="cdek-map" style={{ width: "800px", height: "600px" }}></div>
//     </div>
//   );
// };
