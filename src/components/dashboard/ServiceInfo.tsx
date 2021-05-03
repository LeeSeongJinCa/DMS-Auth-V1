import React, { memo, useEffect } from "react";

import { Input } from "./Dashboard";

import { dmsLogoMint } from "../../assets";
import { ServiceInfo } from "../../utils/api/apis";
import useInput from "../../utils/hooks/useInput";

type ServiceInfoType = {
  app_name: string;
  support_email: string;
  organization: string;
  changeServiceInfo: (
    name: string,
    email: string,
    organization: string
  ) => Promise<void>;
};

const ServiceInfo = ({
  app_name,
  support_email,
  organization,
  changeServiceInfo
}: ServiceInfoType) => {
  const [name, onChangeName, setName] = useInput(app_name);
  const [email, onChangeEmail, setEmail] = useInput(support_email);
  const [group, onChangeGroup, setGroup] = useInput(organization);

  useEffect(() => {
    setName(app_name);
    setEmail(support_email);
    setGroup(organization);
  }, [app_name, support_email, organization]);

  return (
    <div>
      <h2>사용자에게 보여질 정보</h2>
      <p>로그인 시 사용자에게 제공될 정보입니다.</p>
      <Input
        title="앱 이름"
        inputAttr={{
          value: name,
          onChange: onChangeName
        }}
      />
      <Input
        title="지원 이메일"
        inputAttr={{
          value: email,
          onChange: onChangeEmail
        }}
      />
      <Input
        title="소속"
        inputAttr={{
          value: group,
          onChange: onChangeGroup
        }}
      />
      <label className="logo-wrap">
        <p>로고 이미지</p>
        <div>
          <img src={dmsLogoMint} alt="logo" title="logo" />
        </div>
      </label>
      <button onClick={() => changeServiceInfo(name, email, group)}>
        저장
      </button>
    </div>
  );
};

export default memo(ServiceInfo);
