import React, { memo, MouseEvent, useEffect } from "react";
import { useRecoilValue } from "recoil";

import { Input } from "./Dashboard";

import { dmsLogoMint } from "../../assets";
import { ServiceInfo } from "../../utils/api/apis";
import useInput from "../../utils/hooks/useInput";
import { serviceInfoState } from "../../atoms/dashboard";

type ServiceInfoType = {
  changeServiceInfo: (e: MouseEvent<HTMLButtonElement>) => Promise<void>;
};

const ServiceInfo = ({ changeServiceInfo }: ServiceInfoType) => {
  const state = useRecoilValue(serviceInfoState);
  const { app_name, support_email, organization } = state;
  const [name, onChangeName, setName] = useInput(app_name);
  const [email, onChangeEmail, setEmail] = useInput(support_email);
  const [group, onChangeGroup, setGroup] = useInput(organization);

  useEffect(() => {
    setName(app_name);
  }, [app_name]);
  useEffect(() => {
    setEmail(support_email);
  }, [support_email]);
  useEffect(() => {
    setGroup(organization);
  }, [organization]);

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
      <button
        data-name={name}
        data-email={email}
        data-group={group}
        onClick={changeServiceInfo}
      >
        저장
      </button>
    </div>
  );
};

export default memo(ServiceInfo);
