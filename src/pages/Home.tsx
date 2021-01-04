import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import {
  peopleCircleOutline,
  personCircleOutline,
  homeOutline,
  settingsOutline,
} from "ionicons/icons";
import React from "react";
import { Route, Redirect } from "react-router";
import AllSake from "./AllSake";
import MySake from "./MySake";
import Settings from "./Settings";
import Setttings from "./Settings";

const Home: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        {/* <Route path="/home/allsake" component={AllSake} exact={true} /> */}
        <Route path="/home/mysake" component={MySake} exact={true} />
        <Route path="/home/settings" component={Settings} exact={true} />
        <Route
          path="/home"
          render={() => <Redirect to="/home/mysake" />}
          exact={true}
        />
        <Route
          path="/"
          render={() => <Redirect to="/home/mysake" />}
          exact={true}
        />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        {/* <IonTabButton tab="allsake" href="/home/allsake">
          <IonIcon icon={peopleCircleOutline} />
          <IonLabel>みんなの酒</IonLabel>
        </IonTabButton> */}
        <IonTabButton tab="mysake" href="/home/mysake">
          <IonIcon icon={homeOutline} />
          <IonLabel>ホーム</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/home/settings">
          <IonIcon icon={settingsOutline} />
          <IonLabel>設定</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Home;
