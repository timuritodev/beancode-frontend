/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_BASE_URL } from "../../../../utils/constants";
import {
  IAuthDelivery,
  OrderRegistrationRequest,
} from "../../../../types/Deliver.types";

const checkRes = (res: any) => {
  if (res.ok) {
    return res;
  } else {
    return Promise.reject(res);
  }
};

export const fetchData = (
  url: string,
  method: string,
  data?: OrderRegistrationRequest,
  token?: string
) => {
  return fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(!!token && { Authorization: `Bearer ${token}` }),
    },
    // credentials: "include",
    ...(!!data && { body: JSON.stringify(data) }),
  }).then((res) => checkRes(res));
};

const objectToFormData = (obj: Record<string, any>) => {
  const formData = new URLSearchParams();
  for (const key in obj) {
    formData.append(key, obj[key]);
  }
  return formData;
};

export const fetchAuthDelivery = (data: IAuthDelivery): Promise<any> => {
  const formData = objectToFormData(data);
  return fetch(`${API_BASE_URL}/api-auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData,
  }).then((res) => checkRes(res).json());
};

export const fetchDeliver2 = (
  data: OrderRegistrationRequest,
  token: string | { token: string }
): Promise<Response> => {
  const tokenString = typeof token === "string" ? token : token.token;
  return fetchData(
    `${API_BASE_URL}/api-deliver`,
    "POST",
    data,
    tokenString
  ).then((res) => checkRes(res));
};
