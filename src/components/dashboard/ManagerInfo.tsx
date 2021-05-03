import React, { memo } from "react";

import { Input } from "./Dashboard";

type Props = {
  manager_name: string;
  manager_number: number;
  manager_email: string;
};

const ManagerInfo = ({
  manager_name,
  manager_number,
  manager_email
}: Props) => {
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
