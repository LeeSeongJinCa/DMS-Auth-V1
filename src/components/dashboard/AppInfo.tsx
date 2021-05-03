import React, { memo } from "react";

import { Input } from "./Dashboard";

type Props = {
  auth_id: string;
  secret_key: string;
};

const AppInfo = ({ auth_id, secret_key }: Props) => {
  return (
    <div>
      <h2>앱 정보</h2>
      <p>앱에 대한 정보를 입력합니다.</p>
      <Input
        title="앱 ID"
        inputAttr={{
          defaultValue: auth_id,
          disabled: true
        }}
      />
      <Input
        title="Secret Key"
        inputAttr={{
          defaultValue: secret_key,
          disabled: true
        }}
        button={true}
      />
    </div>
  );
};

export default memo(AppInfo);
