import React, {
  FC,
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

import { dmsLogoMint } from "../../assets";
import {
  deleteService,
  getServiceInfo,
  getServices,
  putServiceInfo,
  Service
} from "../../utils/api/apis";
import useBool from "../../utils/hooks/useBoolean";
import { useRecoilState } from "recoil";
import { serviceInfoState } from "../../atoms/dashboard";

type InputType = {
  title: string;
  inputAttr: InputHTMLAttributes<HTMLInputElement>;
};

export const Input: FC<InputType> = ({ title, inputAttr, children = null }) => {
  if (children) {
    return (
      <S.InputWrap disabled={inputAttr.disabled}>
        <p>{title}</p>
        <div>{children}</div>
      </S.InputWrap>
    );
  }

  return (
    <S.InputWrap disabled={inputAttr.disabled}>
      <p>{title}</p>
      <div>
        <input type="text" {...inputAttr} />
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
  const [{ app_name }, setService] = useRecoilState(serviceInfoState);

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
    const authId = e.currentTarget.dataset.authId;
    setAuthId(authId);
  };

  const getService = async () => {
    const res = await getServiceInfo(authId);
    setService(res.data);
  };

  const changeServiceInfo = async (e: MouseEvent<HTMLButtonElement>) => {
    const { name, email, group } = e.currentTarget.dataset;

    try {
      await putServiceInfo(authId, name, email, group, "");
      alert("?????? ??????");
    } catch (err) {
      alert("?????? ??????");
    }
  };

  const removeService = async () => {
    if (!confirm("?????? ?????????????????????????")) return;
    try {
      await deleteService(authId);
      await getAllServiceList();
      alert("?????? ??????");
    } catch (err) {
      alert("?????? ??????");
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
        <h1>{app_name || "???????????? ????????????."}</h1>
        <div>
          <div>
            <AppInfo />
            <ServiceInfoComponent changeServiceInfo={changeServiceInfo} />
          </div>
          <div>
            <RedirectURIs getService={getService} />
            <ManagerInfo />
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
          <p>????????? ????????? ???????????? ????????????.</p>
        ) : (
          <p>??????, ?????? ????????? ???????????? ????????? ????????? {`:(`}</p>
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
