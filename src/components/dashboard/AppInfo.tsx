import React, { memo } from "react";
import { useRecoilValue } from "recoil";

import { Input } from "./Dashboard";

import { keyCheckBlack, keyCheckMint } from "../../assets";
import { serviceInfoState } from "../../atoms/dashboard";
import useToggle from "../../utils/hooks/useToggle";

const AppInfo = () => {
  const [key, toggleKey] = useToggle(true);
  const { auth_id, secret_key } = useRecoilValue(serviceInfoState);

  return (
    <div>
      <h2>앱 정보</h2>
      <p>앱에 대한 정보를 입력합니다.</p>
      <Input
        title="앱 ID"
        inputAttr={{ defaultValue: auth_id, disabled: true }}
      />
      <Input
        title="Secret Key"
        inputAttr={{ defaultValue: secret_key, disabled: true }}
      >
        <input
          type={key ? "text" : "password"}
          defaultValue={secret_key}
          disabled={true}
        />
        <button onClick={toggleKey}>
          <img
            src={key ? keyCheckMint : keyCheckBlack}
            alt="check"
            title="check"
          />
          <span>키 보기</span>
        </button>
      </Input>
    </div>
  );
};

export default memo(AppInfo);
