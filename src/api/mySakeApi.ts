import axios from "axios";
import { config } from "process";
import { getObject } from "../utility/LocalStorage";

const makeHeader = async () => {
  const tokenInfo = await getObject("tokenInfo");
  const token = tokenInfo.idToken;

  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };

  return config;
};

/* 酒登録 */
const registerMySake = async () => {
  const url = `https://wng9a8kb54.execute-api.ap-northeast-1.amazonaws.com/dev/sake`;
  const config = await makeHeader();
  const tokenInfo = await getObject("tokenInfo");
  const uuid = tokenInfo.uuid;

  const data = {
    useId: uuid,
    name: "サンプル日本酒",
    type: "日本酒",
    date: "2020/01/11",
    like: 5,
    tasteIntensity: 1,
    tasteSour: 2,
    tasteSweetness: 3,
    tasteMouthfeel: 4,
    tasteAfterglow: 5,
    smellStrength: 1,
    smellRichness: 2,
    smellFruitiness: 3,
    smell: 4,
    smellAfterglow: 5,
  };
  const response = await axios
    .post(url + `/${uuid}`, data, config)
    .catch((err) => {
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
