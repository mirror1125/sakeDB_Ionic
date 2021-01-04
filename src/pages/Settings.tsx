import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import React from "react";

function Settings() {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>設定</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>設定画面</h1>
      </IonContent>
    </IonPage>
  );
}

export default Settings;
