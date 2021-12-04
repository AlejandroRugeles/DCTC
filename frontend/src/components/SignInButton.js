// Import FirebaseAuth and firebase.
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyBJSHM2C8sW2zFWs1xkk9gHuLGPyJOcpTw",
  authDomain: "dctc-974d9.firebaseapp.com",
  projectId: "dctc-974d9",
  storageBucket: "dctc-974d9.appspot.com",
  messagingSenderId: "331990901110",
  appId: "1:331990901110:web:cc74cabbe21c431a43da57",
  measurementId: "G-09VCCL4GLF",
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/home",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],

  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      const user = {
        uid: authResult.user.uid,
        name: authResult.user.displayName,
        photoUrl: authResult.user.photoUrl,
        email: authResult.user.email,
        flagNewUser: authResult.additionalUserInfo.isNewUser,
      };

      localStorage.setItem("user", JSON.stringify(user));
      return true;
    },
  },
};

function SignInButon() {
  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  );
}

export default SignInButon;
