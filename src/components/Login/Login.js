import React from "react";
import Button from "./Button/Button";
import styled from "styled-components";
import { auth } from "../../Firebase/config";
import {
  FacebookAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo,
  GoogleAuthProvider,
} from "firebase/auth";
import { addDocument } from "../../Firebase/service";
import { motion } from "framer-motion";
const ContainerStyled = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #000428, #004e92);
  color: #fff;
  z-index: 1000;
`;
const StyleBefore = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    358.4deg,
    rgba(249, 151, 119, 1) -2.1%,
    rgba(98, 58, 162, 1) 90%
  );
  clip-path: circle(25% at 10% 10%);
`;
const StyleAfter = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    109.6deg,
    rgba(61, 245, 167, 1) 11.2%,
    rgba(9, 111, 224, 1) 91.1%
  );
  clip-path: circle(20% at 90% 60%);
`;

const StyleDiv = styled(motion.div)`
  position: relative;
  width: 400px;
  height: 500px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background: rgb(255, 255, 255, 0.1);
  border-left: 1px solid rgb(255, 255, 255, 0.4);
  border-top: 1px solid rgb(255, 255, 255, 0.4);
  overflow: none;
  backdrop-filter: blur(5px);
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  text-align: center;
  margin: auto;
`;
const StyleHeading = styled.h1`
  font-size: 3.5em;
  font-weight: bold;
`;

const providerFb = new FacebookAuthProvider();
providerFb.addScope("user_birthday");

const providerGoogle = new GoogleAuthProvider();
providerGoogle.addScope("https://www.googleapis.com/auth/contacts.readonly");

const Login = () => {
  const handleLoginFb = async () => {
    const user = await signInWithPopup(auth, providerFb);
    const additionalUserInfo = getAdditionalUserInfo(user);
    if (additionalUserInfo?.isNewUser) {
      addDocument("users", {
        displayName: user.user.displayName,
        photoURL: user.user.photoURL,
        email: user.user.email,
        uid: user.user.uid,
        provider: additionalUserInfo.providerId,
      });
    }
  };

  const handleLoginGoogle = async () => {
    const user = await signInWithPopup(auth, providerGoogle);
    const additionalUserInfo = getAdditionalUserInfo(user);
    if (additionalUserInfo?.isNewUser) {
      addDocument("users", {
        displayName: user.user.displayName,
        photoURL: user.user.photoURL,
        email: user.user.email,
        uid: user.user.uid,
        provider: additionalUserInfo.providerId,
      });
    }
  };
  return (
    <ContainerStyled>
      <StyleBefore />
      <StyleDiv
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <StyleHeading>Login</StyleHeading>
        <div>
          <Button text={"Login with FaceBook"} onClick={handleLoginFb} />
          <Button text={"Login with Google"} onClick={handleLoginGoogle} />
        </div>
      </StyleDiv>
      <StyleAfter />
    </ContainerStyled>
  );
};

export default Login;
