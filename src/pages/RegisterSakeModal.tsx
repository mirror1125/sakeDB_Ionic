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
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { closeOutline } from "ionicons/icons";
import { modalController } from "@ionic/core";

import { registerMySake } from "../api/mySakeApi";
import { useHistory } from "react-router-dom";

interface ICallback {
  (argv: IModalReturn): void;
}

interface IModalReturn {
  type: "SUCCESS" | "CANCEL" | "LINKTO";
  data: any;
}

interface IRegisterSakeModalProps {
  isOpen: boolean;
  callback: ICallback;
}

// TODO: 全体的にエラー処理

const RegisterSakeModal: React.FC<IRegisterSakeModalProps> = ({
  isOpen,
  callback,
}) => {
  const history = useHistory();

  const onClickSend = () => {
    registerMySake()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
          <IonTitle>酒登録</IonTitle>
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
        <h1>酒の登録</h1>
        <IonButton
          color="primary"
          expand="block"
          className="ion-margin-top"
          style={{ fontSize: "18px" }}
          onClick={onClickSend}
        >
          登録
        </IonButton>
      </IonContent>
    </IonModal>
  );
};

export default RegisterSakeModal;
