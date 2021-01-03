import axios from "axios";
import { baseUrl, userPoolId, clietId } from "./awsConfig";
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
  CognitoRefreshToken,
} from "amazon-cognito-identity-js";

const userPool = new CognitoUserPool({
  UserPoolId: userPoolId,
  ClientId: clietId,
});

//ログイン時にnewする。(二要素認証時に同一インスタンスでなければ、認証成功しない)//TODO: COgnito APIを把握して適切な宣言スコープとする
let cognitoUser: CognitoUser; //TODO: 宣言位置が適切か再考すること

/* ユーザー新規登録 */
const requestRegisterUser = async (
  userName: string,
  email: string,
  password: string
) => {
  let attributeList: any = [];

  const name = {
    Name: "name",
    Value: userName,
  };

  const attributeName = new CognitoUserAttribute(name);
  attributeList.push(attributeName);

  return new Promise((resolve, reject) => {
    userPool.signUp(email, password, attributeList, [], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

/* コード検証 */
const verifyCode = (email: string, code: string) => {
  const cognitoUser = new CognitoUser({
    Username: email,
    Pool: userPool,
  });

  return new Promise((resolve, reject) => {
    cognitoUser.confirmRegistration(code, true, (err: any, result: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

/* ログイン */
const requestLoginUser = async (email: string, password: string) => {
  const authenticationDetails = new AuthenticationDetails({
    Username: email,
    Password: password,
  });

  cognitoUser = new CognitoUser({
    Username: email,
    Pool: userPool,
  });

  return new Promise((resolve, reject) => {
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        resolve(result);
      },
      onFailure: (err) => {
        reject(err);
      },
    });
  });
};

export { requestRegisterUser, verifyCode, requestLoginUser };
