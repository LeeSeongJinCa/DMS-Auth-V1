import React from "react";

import * as S from "./style";

import { dmsLogoMint, keyCheckBlack, unused } from "../../assets";

const info = [
  {
    use: true,
    name: "아이디"
  },
  {
    use: true,
    name: "이름"
  },
  {
    use: true,
    name: "학번"
  }
];

const Agreement = () => {
  return (
    <S.LoginWrap>
      <div>
        <img src={dmsLogoMint} alt="dms logo" title="dms logo" />
      </div>
      <main className="agreement-main">
        <p>DMS-AUTH가 서비스에 제공하는 정보</p>
        {info.map(({ use, name }) => (
          <div key={name}>
            <img
              src={use ? keyCheckBlack : unused}
              alt={use ? "used" : "unused"}
              title={use ? "used" : "unused"}
            />
            <span>{name}</span>
          </div>
        ))}
      </main>
      <div>
        <button>동의</button>
      </div>
    </S.LoginWrap>
  );
};

export default Agreement;
