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
} from "@ionic/react";
import { add } from "ionicons/icons";
import React, { useState } from "react";

import { registerMySake } from "../api/mySakeApi";

function MySake() {
  const [searchText, setSearchText] = useState("");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>わたしの酒</IonTitle>
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
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={registerMySake}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
}

export default MySake;
