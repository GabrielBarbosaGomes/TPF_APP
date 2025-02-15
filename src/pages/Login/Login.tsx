import { IonContent, IonInput, IonItem, IonPage } from "@ionic/react";
import logo from "../../assets/img/Logo.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { IonButton } from "@ionic/react";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="flex flex-col items-center justify-center gap-8 mt-10 p-10">
          <img alt="Logo" src={logo} />
          <h1 className="!font-bold">Trampo Fácil</h1>
          <div className="flex gap-5">
            <div className="flex items-center text-xl !font-bold">
              <FacebookIcon color="primary" />
              <p>facebook</p>
            </div>

            <div className="flex items-center text-xl !font-bold">
              <GoogleIcon color="action" />
              <p>Google</p>
            </div>
          </div>
          <div>or</div>
          <div className="w-full">
            <IonItem >
              <IonInput
                label="Email"
                type="email"
                placeholder="email@domain.com"
                labelPlacement="floating"
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput
                label="Password"
                type="password"
                value="password"
                labelPlacement="floating"
              ></IonInput>
            </IonItem>
            <a className="flex w-full justify-end">Esqueceu a senha?</a>
          </div>
          <IonButton className="w-full" expand="block">Entrar</IonButton>
        </div>

        <p className="text-xl !font-bold">Não tem uma conta registrada?<a>Resgistre-se</a></p>
      </IonContent>
    </IonPage>
  );
};

export default Login;
