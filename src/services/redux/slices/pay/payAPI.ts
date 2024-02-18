/* eslint-disable @typescript-eslint/no-explicit-any */
import { IPayData } from "../../../../types/Pay.types";
import { API_BASE_URL } from "../../../../utils/constants";

const url = "https://alfa.rbsuat.com/payment/rest/register.do";

const checkRes = (res: Response) => {
  if (res.ok) {
    return res;
  } else {
    return Promise.reject(res);
  }
};

const objectToFormData = (obj: Record<string, any>) => {
  const formData = new URLSearchParams();
  for (const key in obj) {
    formData.append(key, obj[key]);
  }
  return formData;
};

export const fetchPay = (data: IPayData): Promise<Response> => {
  const formData = objectToFormData(data);

  return fetch(url, {
    method: "POST",
    // mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData,
  }).then((res) => checkRes(res));
};

// import { IPayData } from "../../../../types/Pay.types";
// import { API_BASE_URL } from "../../../../utils/constants";
// const url = "https://alfa.rbsuat.com/payment/rest/register.do";

// const checkRes = (res: Response) => {
//   if (res.ok) {
//     return res;
//   } else {
//     return Promise.reject(res);
//   }
// };

// export const fetchData = (
//   url: string,
//   method: string,
//   data?: IPayData,
//   token?: string
// ) => {
//   return fetch(url, {
//     method,
//     mode: 'no-cors',
//     headers: {
//       "Content-Type": "application/json",
//       ...(!!token && { Authorization: `Bearer ${token}` }),
//     },
//     ...(!!data && { body: JSON.stringify(data) }),
//   }).then((res) => checkRes(res));
// };

// export const fetchPay = (data: IPayData): Promise<Response> => {
//   return fetchData(url, "POST", data).then((res) =>
//     checkRes(res)
//   );
// };
