import {
  IonApp,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import { homeOutline, reorderThreeOutline, apertureOutline } from "ionicons/icons";
const Tab1: React.FC = () => {
  return (
    <IonApp>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Pages!</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            <IonListHeader>
              <IonLabel>Explore here!</IonLabel>
            </IonListHeader>
            <IonMenuToggle autoHide>
              <IonItem button routerLink="/tab1">
                <IonIcon slot="start" icon={homeOutline}></IonIcon>
                <IonLabel>Home</IonLabel>
              </IonItem>
              <IonItem routerLink="/tab2">
                <IonIcon slot="start" icon={apertureOutline}></IonIcon>
                <IonLabel>Film</IonLabel>
              </IonItem>
              <IonItem routerLink="/tab3">
                <IonIcon slot="start" icon={apertureOutline}></IonIcon>
                <IonLabel>Information</IonLabel>
              </IonItem>
              <IonItem routerLink="/service">
                <IonIcon slot="start" icon={apertureOutline}></IonIcon>
                <IonLabel>Services</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuToggle>
                <IonButton>
                  <IonIcon slot="start" icon={reorderThreeOutline}></IonIcon>
                </IonButton>
              </IonMenuToggle>
            </IonButtons>
            <IonTitle>Welcome!</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <h1>Main Film Page</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};
export default Tab1;
