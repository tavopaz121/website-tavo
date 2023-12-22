import { initializeApp, getApps } from "firebase/app";
import type { FirebaseApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBBjA5dS-xNmFGC5Bj_pNk1U1XJ1zTuaik",
  authDomain: "insumo-estructural.firebaseapp.com",
  projectId: "insumo-estructural",
  storageBucket: "insumo-estructural.appspot.com",
  messagingSenderId: "523772083910",
  appId: "1:523772083910:web:c7fe207c596982a0f7a1c7",
};

let app: FirebaseApp;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export default app;
