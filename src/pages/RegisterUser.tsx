import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonLabel,
  IonItem,
  IonInput,
  IonList,
  IonLoading,
} from "@ionic/react";
import React, { useState } from "react";

import { requestRegisterUser } from "../api/userApi";
import { setObject } from "../utility/LocalStorage";

import RegisterUserModal from "./RegisterUserModal";

// TODO: 入力値のバリデーション
// TODO: IonInputのプロパティは色々と便利そうなものがあるからチェックしときたい

const RegisterUser: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfmPass, setCfmPass] = useState("");
  const [userName, setUserName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const onClickRegister = () => {
    setShowLoading(true);
    try {
      requestRegisterUser(userName, email, password).then((res) => {
        setShowModal(true);
        setObject("userInfo", { email: email, password: password });
      });
    } catch (error) {
      console.error(error);
    } finally {
      setShowLoading(false);
    }
  };

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>新規登録</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class="ion-padding">
        <IonList>
          <IonItem class="ion-no-padding">
            <IonLabel position="floating">ユーザ名</IonLabel>
            <IonInput
              type="text"
              value={userName}
              onIonChange={(e) => {
                setUserName(e.detail.value!);
              }}
            ></IonInput>
          </IonItem>
          <IonItem class="ion-no-padding">
            <IonLabel position="floating">メールアドレス</IonLabel>
            <IonInput
              type="email"
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
          <IonItem class="ion-no-padding">
            <IonLabel position="floating">パスワード(確認用)</IonLabel>
            <IonInput
              type="password"
              value={cfmPass}
              onIonChange={(e) => {
                setCfmPass(e.detail.value!);
              }}
            ></IonInput>
          </IonItem>
        </IonList>
        <IonButton
          color="primary"
          expand="block"
          className="ion-margin-top"
          style={{ fontSize: "18px" }}
          onClick={onClickRegister}
        >
          登録
        </IonButton>

        <RegisterUserModal
          isOpen={showModal}
          email={email}
          callback={(res) => {
            console.log(res);
            setShowModal(false);
          }}
        />

        {/* ぐるぐる */}
        <IonLoading isOpen={showLoading} />
      </IonContent>
    </IonPage>
  );
};

export default RegisterUser;
