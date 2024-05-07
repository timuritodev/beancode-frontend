/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_BASE_URL } from "../../../../utils/constants";
import { OrderRegistrationRequest } from "../../../../types/Deliver.types";

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

export const fetchDeliver = (
  data: OrderRegistrationRequest
): Promise<Response> => {
  return fetchData(`${API_BASE_URL}/api-deliver`, "POST", data).then((res) =>
    checkRes(res)
  );
};
