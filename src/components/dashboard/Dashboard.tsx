import React, { FC } from "react";

import * as S from "./style";

import { dmsLogoMint, itemDot, keyCheckMint } from "../../assets";

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

const ServiceItem = ({ name, id }: { name: string; id: string }) => {
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
            {Array(2)
              .fill(0)
              .map((_, i) => (
                <ServiceItem
                  key={i}
                  name={"DMS-OAuth V" + (i + 1)}
                  id="DMS-OAuth-2057a007-b8ba-418f-a4eb-6a9b98251f49"
                />
              ))}
          </ul>
        </div>
        <div className="user-info">
          <h3>3학년 2반 7번 손민기</h3>
          <button>서비스 등록</button>
          <a href="/">로그아웃</a>
        </div>
      </aside>
    </S.DashboardWrap>
  );
};

export default Dashboard;
