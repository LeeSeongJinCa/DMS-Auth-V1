import React, {
  InputHTMLAttributes,
  MouseEvent,
  useEffect,
  useState
} from "react";

import * as S from "./style";
import ServiceApplyModal from "./ServiceApplyModal";
import ServiceInfoComponent from "./ServiceInfo";
import AppInfo from "./AppInfo";
import RedirectURIs from "./RedirectURIs";
import ManagerInfo from "./ManagerInfo";
import ServiceList from "./ServiceList";
import Menu from "./Menu";

import { dmsLogoMint, keyCheckMint } from "../../assets";
import {
  deleteService,
  getServiceInfo,
  getServices,
  putServiceInfo,
  Service,
  ServiceInfo
} from "../../utils/api/apis";
import useToggle from "../../utils/hooks/useToggle";
import useBool from "../../utils/hooks/useBoolean";
import { useRecoilState } from "recoil";
import { serviceInfoState } from "../../atoms/dashboard";

type InputType = {
  title: string;
  button?: boolean;
  inputAttr?: InputHTMLAttributes<HTMLInputElement>;
};

const serviceInit = {
  app_name: "",
  auth_id: "",
  logo_uri: "",
  manager_email: "",
  manager_name: "",
  manager_number: 0,
  organization: "",
  redirect_uris: [],
  secret_key: "",
  support_email: ""
};

export const Input = ({ title, button = false, inputAttr }: InputType) => {
  const [key, toggleKey] = useToggle(!button);

  return (
    <S.InputWrap disabled={inputAttr.disabled}>
      <p>{title}</p>
      <div>
        <input type={key ? "text" : "password"} {...inputAttr} />
        {button && (
          <button onClick={toggleKey}>
            <img src={keyCheckMint} alt="check" title="check" />
            <span>키 보기</span>
          </button>
        )}
      </div>
    </S.InputWrap>
  );
};

const Dashboard = () => {
  const [loading, startLoading, endLoading] = useBool();
  const [modal, openModal, closeModal] = useBool();
  const [step, setStep] = useState<number>(0);
  const [services, setServices] = useState<Service[]>([]);
  const [authId, setAuthId] = useState<string>("");
  const [service, setService] = useState<ServiceInfo>(serviceInit);
  const [service2, setService2] = useRecoilState(serviceInfoState);

  console.log(service2);

  const onClickNextStep = () => {
    setStep(prev => prev + 1);
  };

  const resetStep = () => {
    setStep(0);
  };

  const getAllServiceList = async () => {
    startLoading();
    const res = await getServices();
    setServices(res.data.services);
    endLoading();
  };

  const onClickAuthId = (e: MouseEvent<HTMLLIElement>) => {
    setAuthId(e.currentTarget.dataset["authId"]);
  };

  const getService = async () => {
    const res = await getServiceInfo(authId);
    setService(res.data);
  };

  const changeServiceInfo = async (
    name: string,
    email: string,
    organization: string
  ) => {
    try {
      await putServiceInfo(authId, name, email, organization, "");
      alert("수정 성공");
    } catch (err) {
      alert("수정 실패");
    }
  };

  const removeService = async () => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    try {
      await deleteService(authId);
      await getAllServiceList();
      alert("삭제 성공");
    } catch (err) {
      alert("삭제 실패");
    }
  };

  useEffect(() => {
    getAllServiceList();
  }, []);
  useEffect(() => {
    if (services.length) {
      setAuthId(services[0].auth_id);
    } else {
      setAuthId("");
    }
  }, [services]);
  useEffect(() => {
    if (authId) {
      getService();
    }
  }, [authId]);

  return (
    <S.DashboardWrap className={authId ? "" : "empty"}>
      <img src={dmsLogoMint} alt="logo" />
      <main>
        <h1>{service.app_name || "불러오는 중입니다."}</h1>
        <div>
          <div>
            <AppInfo
              auth_id={service.auth_id}
              secret_key={service.secret_key}
            />
            <ServiceInfoComponent
              app_name={service.app_name}
              support_email={service.support_email}
              organization={service.organization}
              changeServiceInfo={changeServiceInfo}
            />
          </div>
          <div>
            <RedirectURIs
              auth_id={service.auth_id}
              redirect_uris={service.redirect_uris}
              getService={getService}
            />
            <ManagerInfo
              manager_name={service.manager_name}
              manager_number={service.manager_number}
              manager_email={service.manager_email}
            />
          </div>
        </div>
      </main>
      <aside>
        <ServiceList
          services={services}
          authId={authId}
          onClickAuthId={onClickAuthId}
        />
        <Menu openModal={openModal} removeService={removeService} />
      </aside>
      {!authId &&
        (loading ? (
          <p>서비스 정보를 가져오는 중이에요.</p>
        ) : (
          <p>이런, 아직 등록된 서비스가 하나도 없어요 {`:(`}</p>
        ))}
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
