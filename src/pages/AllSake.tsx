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
  IonPage,
} from "@ionic/react";
import React, { useState } from "react";

function AllSake() {
  const [searchText, setSearchText] = useState("");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>みんなの酒</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          showCancelButton="never"
        ></IonSearchbar>
        <IonList>
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
      </IonContent>
    </IonPage>
  );
}

export default AllSake;
