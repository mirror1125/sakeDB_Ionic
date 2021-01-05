import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonFab,
  IonFabButton,
  IonIcon,
  IonPage,
  IonInput,
} from "@ionic/react";
import { add } from "ionicons/icons";
import React, { useState } from "react";

import RegisterSakeModal from "./RegisterSakeModal";
import { registerMySake, getMySakeList } from "../api/mySakeApi";

function MySake() {
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>ホーム</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          showCancelButton="never"
        ></IonSearchbar>
        <IonList>
          <mobiscroll.Rating></mobiscroll.Rating>
          <IonItem>
            <IonThumbnail slot="end">
              <img alt="sake" src="../assets/images/drink_beer.png" />
            </IonThumbnail>
            <IonLabel>
              <h3>サンプルビール</h3>
              <p>好き：★★★★★</p>
              <p>2020年12月27日</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="end">
              <img alt="sake" src="../assets/images/drink_beer.png" />
            </IonThumbnail>
            <IonLabel>
              <h3>サンプルビール</h3>
              <p>好き：★★★★★</p>
              <p>2020年12月27日</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="end">
              <img alt="sake" src="../assets/images/drink_beer.png" />
            </IonThumbnail>
            <IonLabel>
              <h3>サンプルビール</h3>
              <p>好き：★★★★★</p>
              <p>2020年12月27日</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="end">
              <img alt="sake" src="../assets/images/drink_beer.png" />
            </IonThumbnail>
            <IonLabel>
              <h3>サンプルビール</h3>
              <p>好き：★★★★★</p>
              <p>2020年12月27日</p>
            </IonLabel>
          </IonItem>
        </IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton
            onClick={() => {
              setShowModal(true);
            }}
          >
            <IonIcon icon={add} />
          </IonFabButton>
          {/* <IonFabButton
            onClick={() => {
              getMySakeList()
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            <IonIcon icon={add} />
          </IonFabButton> */}
        </IonFab>
        <RegisterSakeModal
          isOpen={showModal}
          callback={(res) => {
            console.log(res);
            setShowModal(false);
          }}
        />
      </IonContent>
    </IonPage>
  );
}

export default MySake;
