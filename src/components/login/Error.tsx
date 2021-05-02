import React from "react";

import * as S from "./style";

import { error } from "../../assets";

const Error = () => {
  return (
    <S.LoginWrap>
      <h1>ERROR</h1>
      <main className="error-main">
        <div>
          <img src={error} alt="error" title="error" />
        </div>
        <p>
          auth ID와 redirect URI를 확인해주세요.auth ID와 redirect URI를
          확인해주세요. auth ID와 redirect URI를 확인해주세요. auth ID와
          redirect URI를 확인해주세요. auth ID와 redirect URI를 확인해주세요.
          auth ID와 redirect URI를 확인해주세요.
        </p>
      </main>
    </S.LoginWrap>
  );
};

export default Error;
