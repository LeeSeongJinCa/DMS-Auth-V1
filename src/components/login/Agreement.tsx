import React, { FC } from "react";

import * as S from "./style";

import { dmsLogoMint, keyCheckBlack, unused } from "../../assets";

interface Props {}

const Agreement: FC<Props> = () => {
  return (
    <S.LoginWrap>
      <div>
        <img src={dmsLogoMint} alt="dms logo" title="dms logo" />
      </div>
      <main className="agreement-main">
        <p>DMS-AUTH가 서비스에 제공하는 정보</p>
        <div>
          <img src={unused} alt="unused" title="unused" />
          <span>아이디</span>
        </div>
        <div>
          <img src={keyCheckBlack} alt="used" title="used" />
          <span>이름</span>
        </div>
        <div>
          <img src={keyCheckBlack} alt="used" title="used" />
          <span>학번</span>
        </div>
      </main>
      <div>
        <button>동의</button>
      </div>
    </S.LoginWrap>
  );
};

export default Agreement;
