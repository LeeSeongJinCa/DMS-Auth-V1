import React from "react";
import { useHistory } from "react-router";

import * as S from "./style";

const Main = () => {
  const history = useHistory();

  const redirectToLogin = () => {
    history.push(
      "/login?redirect_uri=http://127.0.0.1:3000&auth_id=DMS-OAuth-39f83350-3498-482f-b7c6-9f6bc7158fed"
    );
  };

  return (
    <S.MainWrap>
      <div>
        <h1>DMS-AUTH</h1>
        <h2>대덕소프트웨어마이스터고 기숙사 관리시스템 인증 서비스</h2>
        <h3>DMS-AUTH를 통하여 간단하고 편리한 인증서비스를 제공하세요.</h3>
        <button onClick={redirectToLogin}>시작하기</button>
      </div>
    </S.MainWrap>
  );
};

export default Main;
