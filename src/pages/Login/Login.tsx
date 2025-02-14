import { IonContent, IonPage } from '@ionic/react';
import './Home.css';
import logo from "../../assets/img/Logo.svg"

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <img
          alt="Logo"
          src={logo}
        />
        <h1>Trampo Fácil</h1>
        <div>
          
        </div>
      </IonContent>
     
    </IonPage>
  );
};

export default Login;
