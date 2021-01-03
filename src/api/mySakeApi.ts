import axios from "axios";

/* コード検証 */
const registerMySake = async () => {
  const url = `https://wng9a8kb54.execute-api.ap-northeast-1.amazonaws.com/dev/sake`;

  const response = await axios.post(url).catch((err) => {
    throw err;
  });

  return response.data;
};

export { registerMySake };
