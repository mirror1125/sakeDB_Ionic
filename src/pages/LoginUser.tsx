import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";

import { setObject } from "../utility/LocalStorage";
import { requestLoginUser } from "../api/userApi";
import { useHistory } from "react-router";

const LoginUser: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onClickLogin = () => {
    try {
      requestLoginUser(email, password).then((res) => {
        console.log(res);
        saveTokenInfo(res);
        history.push("/home");
      });
    } catch (error) {
      console.error(error);
      history.push("/login");
    }
  };

  const saveTokenInfo = (data: any) => {
    const tokenInfo = {
      accsessToken: String(data.accessToken.jwtToken),
      uuid: String(data.accessToken.payload.sub),
      tokenExp: String(data.accessToken.payload.exp),
      idToken: String(data.idToken.jwtToken),
      refreshToken: String(data.refreshToken.token),
    };
    setObject("tokenInfo", tokenInfo);
  };

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>酒DB</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div className="ion-text-center">
          <img alt="sake" src="../assets/images/drink_beer.png" />
        </div>
        <IonList>
          <IonItem class="ion-no-padding">
            <IonLabel position="floating">メールアドレス</IonLabel>
            <IonInput
              type="text"
              value={email}
              onIonChange={(e) => {
                setEmail(e.detail.value!);
              }}
            ></IonInput>
          </IonItem>
          <IonItem class="ion-no-padding">
            <IonLabel position="floating">パスワード</IonLabel>
            <IonInput
              type="password"
              value={password}
              onIonChange={(e) => {
                setPassword(e.detail.value!);
              }}
            ></IonInput>
          </IonItem>
        </IonList>

        <IonButton
          color="primary"
          expand="block"
          className="ion-margin-top"
          style={{ fontSize: "18px" }}
          onClick={onClickLogin}
        >
          ログイン
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginUser;
