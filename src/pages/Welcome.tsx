import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonPage,
} from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";

import { requestLoginUser } from "../api/userApi";
import { getObject, setObject } from "../utility/LocalStorage";

const Welcome: React.FC = () => {
  const history = useHistory();

  const onClickStart = () => {
    try {
      getObject("userInfo").then((res) => {
        console.log(res);
        requestLoginUser(res.email, res.password).then((res) => {
          console.log(res);
          saveTokenInfo(res);
          history.push("/home");
        });
      });
    } catch (error) {
      console.error(error);
      history.push("/login");
    }
  };

  const saveTokenInfo = (data: any) => {
    const tokenInfo = {
      accsessToken: String(data.accessToken.jwtToken),
      tokenExp: String(data.accessToken.payload.exp),
      idToken: String(data.idToken.jwtToken),
      refreshToken: String(data.refreshToken.token),
    };
    setObject("tokenInfo", tokenInfo);
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle className="ion-text-center">乾杯！！！</IonCardTitle>
          </IonCardHeader>
          <div className="ion-text-center">
            <img alt="sake" src="../assets/images/drink_beer.png" />
          </div>
          <IonCardContent>
            ユーザ登録を完了しました！さあ、今日はどんな酒に出会えるでしょうか？
          </IonCardContent>
        </IonCard>

        <IonButton
          color="primary"
          expand="block"
          className="ion-margin-top"
          style={{ fontSize: "18px" }}
          onClick={onClickStart}
        >
          アプリの利用を始める
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
