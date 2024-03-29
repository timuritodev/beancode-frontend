import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

export const Widget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.jsdelivr.net/npm/@cdek-it/widget@3';
    script.charset = 'utf-8';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (window.CDEKWidget) {
      new window.CDEKWidget({
        from: 'Новосибирск',
        root: 'cdek-map',
        apiKey: 'c71385a4-e8d4-4e71-8c0d-f0d16956e3ba',
        servicePath: 'https://bean-code.ru/service.php', 
        // servicePath: 'https://widget.cdek.ru/widget/scripts/service.php', 
        defaultLocation: 'Новосибирск'
      });
    }
  }, []);

  return (
    <div>
      <Helmet>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@cdek-it/widget@3"></script>
      </Helmet>
      <div id="cdek-map" style={{ width: '800px', height: '600px' }}></div>
    </div>
  );
};


// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useEffect } from 'react';

// declare global {
//     interface Window {
//       CDEKWidget?: any;
//     }
//   }

  
// export const Widget = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src = 'https://cdn.jsdelivr.net/npm/@cdek-it/widget@3';
//     script.charset = 'utf-8';
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   useEffect(() => {
//     if (window.CDEKWidget) {
//       new window.CDEKWidget({
//         from: 'Новосибирск',
//         root: 'cdek-map',
//         apiKey: 'c71385a4-e8d4-4e71-8c0d-f0d16956e3ba', // Вставьте ваш ключ Яндекс.Карт
//         servicePath: 'https://bean-code.ru/service.php', // Замените на ваш путь к service.php
//         defaultLocation: 'Новосибирск'
//       });
//     }
//   }, []);

//   return (
//     <div>
//       <div id="cdek-map" style={{ width: '800px', height: '600px' }}></div>
//     </div>
//   );
// };
