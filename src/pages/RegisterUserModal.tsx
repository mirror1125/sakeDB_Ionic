import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonTitle,
  IonToast,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { closeOutline } from "ionicons/icons";
import { modalController } from "@ionic/core";

import { verifyCode } from "../api/userApi";
import { setItem } from "../utility/LocalStorage";
import { useHistory } from "react-router-dom";

interface ICallback {
  (argv: IModalReturn): void;
}

interface IModalReturn {
  type: "SUCCESS" | "CANCEL" | "LINKTO";
  data: any;
}

interface IRegisterUserModalProps {
  isOpen: boolean;
  email: string;
  callback: ICallback;
}

// TODO: 全体的にエラー処理

const RegisterUserModal: React.FC<IRegisterUserModalProps> = ({
  isOpen,
  email,
  callback,
}) => {
  const [code, setCode] = useState("");
  const history = useHistory();

  const onClickSend = () => {
    verifyCode(email, code)
      .then((res) => {
        console.log(res);
        setItem("finishedGetStarted", "true")
          .then((res) => {
            modalController.dismiss();
            history.push("/welcome");
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
        // TODO: エラー処理
      });
  };
  return (
    <IonModal
      isOpen={isOpen}
      cssClass="modal-class"
      onDidDismiss={() => {
        isOpen = false;
      }}
    >
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>検証コードの確認</IonTitle>
          <IonButtons slot="start">
            <IonButton
              onClick={() => {
                callback({ type: "CANCEL", data: null });

                // できれば以下のdismissを使いたい
                // 戻るときのアニメーションがカッコいいから
                modalController.dismiss();
              }}
            >
              <IonIcon icon={closeOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class="ion-padding">
        <IonLabel>
          下記メールアドレスで受信した検証コードを入力してください。
        </IonLabel>
        <br />
        <IonLabel>{email}</IonLabel>
        <IonItem>
          <IonLabel position="floating">検証コード</IonLabel>
          <IonInput
            type="number"
            value={code}
            onIonChange={(e) => {
              setCode(e.detail.value!);
            }}
          ></IonInput>
        </IonItem>
        <IonButton
          color="primary"
          expand="block"
          className="ion-margin-top"
          style={{ fontSize: "18px" }}
          onClick={onClickSend}
        >
          検証コード送信
        </IonButton>
      </IonContent>
    </IonModal>
  );
};

export default RegisterUserModal;
