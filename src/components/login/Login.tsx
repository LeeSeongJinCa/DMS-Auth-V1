import React, { useEffect } from "react";
import { useHistory } from "react-router";

import * as S from "./style";

import { dmsLogoMint, loginFace, loginLock } from "../../assets";
import useInput from "../../utils/hooks/useInput";
import urlParams from "../../utils/function/urlParams";
import { getAuthValidation, postLogin } from "../../utils/api/apis";

type Dialog = {
  code: string;
  is_accepted: boolean;
};

const redirect_uri = urlParams.get("redirect_uri");
const auth_id = urlParams.get("auth_id");

const Login = () => {
  const history = useHistory();
  const [id, onChangeId] = useInput();
  const [pw, onChangePw] = useInput();

  const login = async () => {
    const { code, is_accepted } = (
      await postLogin(auth_id, redirect_uri, id, pw)
    ).data;

    if (!is_accepted) {
      history.push("/privacy-policy-agreement");
    }

    window.location.href = `/redirect-code?code=${code}`;
  };

  const checkValidDialog = () => {
    try {
      getAuthValidation(auth_id, redirect_uri);
    } catch {
      history.push("/error");
    }
  };

  useEffect(() => {
    checkValidDialog();
  }, []);

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
      <main className="login-main">
        <label>
          <img src={loginFace} alt="id icon" title="id icon" />
          <input
            type="text"
            onChange={onChangeId}
            value={id}
            placeholder="아이디"
          />
        </label>
        <label>
          <img src={loginLock} alt="password icon" title="password icon" />
          <input
            type="password"
            onChange={onChangePw}
            value={pw}
            placeholder="비밀번호"
          />
        </label>
      </main>
      <div>
        <button>로그인</button>
      </div>
    </S.LoginWrap>
  );
};

export default Login;
