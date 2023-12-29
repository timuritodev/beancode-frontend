import { API_BASE_URL } from "../../../../utils/constants";
import { ICartData } from "../../../../types/Cart.types";

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
  data?: ICartData,
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

export const fetchAddToCart = (data: ICartData  ): Promise<Response> => {
  return fetchData(`${API_BASE_URL}/cart/add`, "POST", data).then((res) =>
    checkRes(res)
  );
};

// export const fetchGetUserInfo = (
//   token: string | { token: string }
// ): Promise<Response> => {
//   const tokenString = typeof token === "string" ? token : token.token; // Extract token string
//   console.log("Authorization Token:", tokenString);

//   return fetchData(`${API_BASE_URL}/user`, "GET", undefined, tokenString).then(
//     (res) => checkRes(res)
//   );
// };
