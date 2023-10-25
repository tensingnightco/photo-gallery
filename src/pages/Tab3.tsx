import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About Me</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <div className='center-content'>
        <IonText>
          <h2>Hello, I'm Cong Thanh</h2>
          <p>
            I am a passionate web developer with a strong interest in building
            amazing web and mobile applications.
          </p>
          <p>
            From USTH with ❤️.
          </p>
        </IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
