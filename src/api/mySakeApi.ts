import axios from "axios";
import { getObject } from "../utility/LocalStorage";

/* 酒登録 */
const registerMySake = async () => {
  const url = `https://wng9a8kb54.execute-api.ap-northeast-1.amazonaws.com/dev/sake`;

  const response = await axios.post(url).catch((err) => {
    throw err;
  });

  return response.data;
};

/* 酒一覧取得 */
const getMySakeList = async () => {
  const url = `https://wng9a8kb54.execute-api.ap-northeast-1.amazonaws.com/dev/sake`;
  const tokenInfo = await getObject("tokenInfo");
  const token = tokenInfo.idToken;
  const uuid = tokenInfo.uuid;

  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };

  const response = await axios.get(url + `/${uuid}`, config).catch((err) => {
    throw err;
  });

  return response.data;
};

export { registerMySake, getMySakeList };
