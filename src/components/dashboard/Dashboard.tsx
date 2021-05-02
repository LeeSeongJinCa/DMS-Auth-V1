import React, { useEffect, useState } from "react";
import axios from "axios";

import * as S from "./style";
import ServiceApplyModal from "./ServiceApplyModal";

import { dmsLogoMint, itemDot, keyCheckMint } from "../../assets";
import useModal from "../../utils/hooks/useModal";
import { BASE_URL } from "../../utils/api/client";

export type Service = {
  auth_id: string;
  logo_uri: string;
  service_name: string;
};

const Input = ({
  title,
  disabled = false,
  button = false
}: {
  title: string;
  disabled?: boolean;
  button?: boolean;
}) => {
  return (
    <S.InputWrap disabled={disabled}>
      <p>{title}</p>
      <div>
        <input type="text" disabled={disabled} />
        {button && (
          <button>
            <img src={keyCheckMint} alt="check" title="check" />
            <span>키 보기</span>
          </button>
        )}
      </div>
    </S.InputWrap>
  );
};

const RedirectItem = ({ url }: { url: string }) => {
  return (
    <S.ItemWrap>
      <img src={itemDot} alt="dot" title="dot" />
      <span>{url}</span>
    </S.ItemWrap>
  );
};

const ServiceItem = ({
  name,
  id,
  logo_uri
}: {
  name: string;
  id: string;
  logo_uri: string;
}) => {
  return (
    <li>
      <img src={dmsLogoMint} alt="auth logo" title="auth logo" />
      <div>
        <h3>{name}</h3>
        <p>{id}</p>
      </div>
    </li>
  );
};

const Dashboard = () => {
  const [modal, openModal, closeModal] = useModal();
  const [step, setStep] = useState<number>(0);
  const [services, setServices] = useState<Service[]>([]);

  const onClickNextStep = () => {
    setStep(prev => prev + 1);
  };

  const resetStep = () => {
    setStep(0);
  };

  const getAllServiceList = async () => {
    const res = await axios.get<{ services: Service[] }>(
      `${BASE_URL}/service/list`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`
        }
      }
    );
    console.log(res);
    setServices(res.data.services);
  };

  useEffect(() => {
    getAllServiceList();
  }, []);

  return (
    <S.DashboardWrap>
      <img src={dmsLogoMint} alt="logo" />
      <main>
        <h1>DMS-OAuth V1</h1>
        <div>
          <div>
            <div>
              <h2>앱 정보</h2>
              <p>앱에 대한 정보를 입력합니다.</p>
              <Input title="앱 ID" disabled={true} />
              <Input title="Secret Key" disabled={true} button={true} />
            </div>
            <div>
              <h2>사용자에게 보여질 정보</h2>
              <p>로그인 시 사용자에게 제공될 정보입니다.</p>
              <Input title="앱 이름" />
              <Input title="지원 이메일" />
              <Input title="소속" />
              <label className="logo-wrap">
                <p>로고 이미지</p>
                <div>
                  <img src={dmsLogoMint} alt="logo" title="logo" />
                </div>
              </label>
            </div>
          </div>
          <div>
            <div className="redirect-url">
              <h2>Redirect URIs</h2>
              <p>정상적으로 로그인을 한 후, Redirect 될 URI입니다.</p>
              <div>
                <ul>
                  <RedirectItem url="https://127.0.0.1:5000" />
                  <RedirectItem url="https://127.0.0.1:5000/123" />
                  <RedirectItem url="https://127.0.0.1:5000/456" />
                </ul>
                <div className="add-redirect-url">
                  <input type="text" />
                  <button>추가</button>
                </div>
              </div>
            </div>
            <div>
              <h2>Manager</h2>
              <p>
                서비스의 매니저 정보입니다. 문제 발생시 관리자가 확인할 때
                사용합니다.
              </p>
              <Input title="이름" />
              <Input title="학번" />
              <Input title="이메일" />
            </div>
          </div>
        </div>
        <button>저장</button>
      </main>
      <aside>
        <div className="service-list">
          <ul>
            {services.map(({ auth_id, logo_uri, service_name }) => (
              <ServiceItem
                key={auth_id}
                name={service_name}
                id={auth_id}
                logo_uri={logo_uri}
              />
            ))}
          </ul>
        </div>
        <div className="user-info">
          <h3>3학년 2반 7번 손민기</h3>
          <button onClick={openModal}>서비스 등록</button>
          <a href="/">로그아웃</a>
        </div>
      </aside>
      {modal && (
        <ServiceApplyModal
          step={step}
          resetStep={resetStep}
          closeModal={closeModal}
          onClickNextStep={onClickNextStep}
          getAllServiceList={getAllServiceList}
        />
      )}
    </S.DashboardWrap>
  );
};

export default Dashboard;
