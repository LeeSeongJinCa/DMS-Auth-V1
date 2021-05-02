import React, { FC } from "react";
import axios from "axios";

import * as S from "./style";

import { dmsLogoMint, loginFace, loginLock } from "../../assets";

interface Props {}

const Login: FC<Props> = () => {
  const login = async () => {
    axios.post("http://192.168.137.1:5000/auth/dialog", {
      auth_id: "DMS-OAuth-d87746e0-2943-4d52-ba00-a673861b296d",
      redirect_uri: "http://127.0.0.1:5000",
      id: "migsking",
      password: "asdf"
    });
  };

  return (
    <S.LoginWrap
      onSubmit={e => {
        e.preventDefault();
        login();
      }}
    >
      <div>
        <img src={dmsLogoMint} alt="dms logo" title="dms logo" />
      </div>
      <main>
        <label>
          <img src={loginFace} alt="id icon" title="id icon" />
          <input type="text" placeholder="아이디" />
        </label>
        <label>
          <img src={loginLock} alt="password icon" title="password icon" />
          <input type="password" placeholder="비밀번호" />
        </label>
      </main>
      <div>
        <button>로그인</button>
      </div>
    </S.LoginWrap>
  );
};

export default Login;
