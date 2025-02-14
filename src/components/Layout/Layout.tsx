import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Layout: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      {/* <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blankaaaaaaaa</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent> */}
    </IonPage>
  );
};

export default Layout;
