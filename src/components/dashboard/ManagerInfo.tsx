import React, { memo } from "react";
import { useRecoilValue } from "recoil";

import { Input } from "./Dashboard";

import { serviceInfoState } from "../../atoms/dashboard";

const ManagerInfo = () => {
  const state = useRecoilValue(serviceInfoState);
  const { manager_name, manager_number, manager_email } = state;

  return (
    <div>
      <h2>Manager</h2>
      <p>
        서비스의 매니저 정보입니다. 문제 발생시 관리자가 확인할 때 사용합니다.
      </p>
      <Input
        title="이름"
        inputAttr={{
          defaultValue: manager_name,
          disabled: true
        }}
      />
      <Input
        title="학번"
        inputAttr={{
          defaultValue: `${manager_number}`,
          disabled: true
        }}
      />
      <Input
        title="이메일"
        inputAttr={{
          defaultValue: manager_email,
          disabled: true
        }}
      />
    </div>
  );
};

export default memo(ManagerInfo);
