import React, { useEffect, useState } from "react";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";
import { IonApp, IonRouterOutlet, useIonViewWillEnter } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* 画面コンポーネント */
import Login from "./pages/LoginUser";
import Home from "./pages/Home";
import RegisterUser from "./pages/RegisterUser";
import Welcome from "./pages/Welcome";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/* utility */
import { getItem } from "./utility/LocalStorage";

const App: React.FC = () => {
  console.log("useEffect on App");
  const [finishedGetStarted, setFinishedGetStarted] = useState(false);

  // useIonWillEnterはApp.tsxで発火しなかったので
  // useEffectを使用
  useEffect(() => {
    // アカウント登録済み？
    getItem("finishedGetStarted")
      .then((res) => {
        console.log(res);
        if (res.value === "true") {
          setFinishedGetStarted(true);
        } else {
          setFinishedGetStarted(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          {/* TODO: リフレッシュトークンが生きていればログインを省略する */}
          <Route
            exact={true}
            path="/"
            render={() => {
              return finishedGetStarted ? <Login /> : <RegisterUser />;

              // ↓ユーザ登録デバッグ用
              //return <RegisterUser />;
            }}
          />
          <Route path="/home" component={Home} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/registeruser" component={RegisterUser} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
