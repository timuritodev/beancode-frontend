/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

interface Tariff {
  tariff_code: number;
  tariff_name: string;
  tariff_description: string;
  delivery_mode: number;
  period_min: number;
  period_max: number;
  delivery_sum: number;
}

interface OfficeAddress {
  city_code: number;
  city: string;
  type: string;
  postal_code: string;
  country_code: string;
  have_cashless: boolean;
  have_cash: boolean;
  allowed_cod: boolean;
  is_dressing_room: boolean;
  code: string;
  name: string;
  address: string;
  work_time: string;
  location: number[];
}

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
  
  type DeliveryMode = 'office';

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
        onChoose: (deliveryMode: DeliveryMode, tariff: Tariff, address: OfficeAddress) => {
          console.log(`Выбранный режим доставки: ${deliveryMode}`);
          console.log('Выбранный тариф:', tariff);
          console.log('Адрес ПВЗ:', address);
          // Теперь мы напрямую работаем с объектом OfficeAddress
        }
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
