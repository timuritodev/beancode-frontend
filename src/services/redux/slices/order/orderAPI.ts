import { API_BASE_URL } from "../../../../utils/constants";
import { IOrderDetails } from "../../../../types/Order.types";

const checkRes = (res: Response) => {
  if (res.ok) {
    return res;
  } else {
    return Promise.reject(res);
  }
};

export const fetchData = (
  url: string,
  method: string,
  data?: IOrderDetails,
  token?: string
) => {
  return fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(!!token && { Authorization: `Bearer ${token}` }),
    },
    ...(!!data && { body: JSON.stringify(data) }),
  }).then((res) => checkRes(res));
};

export const fetchCreateOrder = (data: IOrderDetails): Promise<Response> => {
  return fetchData(`${API_BASE_URL}/order/create`, "POST", data).then((res) =>
    checkRes(res)
  );
};
