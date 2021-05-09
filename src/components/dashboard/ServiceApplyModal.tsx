import React, { FC, memo, useEffect } from "react";
import ReactDOM from "react-dom";

import { ServiceApplyModalWrap, ServiceApplyModalBackWrap } from "./style";

import { close } from "../../assets";
import useInput, { OnChangeEvent } from "../../utils/hooks/useInput";
import { postService } from "../../utils/api/apis";

const ServiceApplyModalTemplate: FC<{ closeModal: () => void }> = ({
  children,
  closeModal
}) => {
  return (
    <>
      <ServiceApplyModalBackWrap onClick={closeModal} />
      <ServiceApplyModalWrap>{children}</ServiceApplyModalWrap>
    </>
  );
};

const ServiceApplyModalOne = ({
  name,
  closeModal,
  onChangeName,
  onClickNextStep
}: {
  name: string;
  closeModal: () => void;
  onClickNextStep: () => void;
  onChangeName: (e: OnChangeEvent) => void;
}) => {
  return (
    <ServiceApplyModalTemplate closeModal={closeModal}>
      <h1>서비스 생성하기</h1>
      <p>생성할 서비스의 이름을 알려주세요</p>
      <img
        src={close}
        onClick={closeModal}
        alt="close modal"
        title="close modal"
      />
      <label>
        <input
          type="text"
          placeholder="서비스 이름"
          value={name}
          onChange={onChangeName}
          onKeyPress={e => e.key === "Enter" && onClickNextStep()}
          autoFocus={true}
        />
        <button onClick={onClickNextStep}>확인</button>
      </label>
    </ServiceApplyModalTemplate>
  );
};

const ServiceApplyModalTwo = ({
  email,
  organization,
  closeModal,
  onChangeEmail,
  onChangeOrganization,
  createService
}: {
  email: string;
  organization: string;
  closeModal: () => void;
  onChangeEmail: (e: OnChangeEvent) => void;
  onChangeOrganization: (e: OnChangeEvent) => void;
  createService: () => void;
}) => {
  return (
    <ServiceApplyModalTemplate closeModal={closeModal}>
      <h1>서비스 생성하기</h1>
      <p>생성할 서비스의 이름을 알려주세요</p>
      <img
        src={close}
        onClick={closeModal}
        alt="close modal"
        title="close modal"
      />
      <label>
        <input
          type="text"
          placeholder="서비스 이메일"
          value={email}
          onChange={onChangeEmail}
          autoFocus={true}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="소속 그룹 (개인일 경우 개인으로 입력)"
          value={organization}
          onChange={onChangeOrganization}
          onKeyPress={e => e.key === "Enter" && createService()}
        />
      </label>
      <button className="finish" onClick={createService}>
        확인
      </button>
    </ServiceApplyModalTemplate>
  );
};

const ServiceApplyModalThree = ({
  closeModal,
  finishCreateService
}: {
  closeModal: () => void;
  finishCreateService: () => void;
}) => {
  return (
    <ServiceApplyModalTemplate closeModal={closeModal}>
      <h1>서비스가 생성되었습니다!</h1>
      <p>관리 페이지에서 설정을 마저 해주세요.</p>
      <img
        src={close}
        onClick={closeModal}
        alt="close modal"
        title="close modal"
      />
      <button autoFocus={true} className="finish" onClick={finishCreateService}>
        확인
      </button>
    </ServiceApplyModalTemplate>
  );
};

const ServiceApplyModalPortal = (props: {
  step: number;
  resetStep: () => void;
  closeModal: () => void;
  onClickNextStep: () => void;
  getAllServiceList: () => Promise<void>;
}) => {
  const {
    step,
    resetStep,
    closeModal,
    onClickNextStep,
    getAllServiceList
  } = props;
  const [name, onChangeName, setName] = useInput();
  const [email, onChangeEmail, setEmail] = useInput();
  const [organization, onChangeOrganization, setOrganization] = useInput();

  const createService = async () => {
    try {
      await postService(name, email, organization);
      alert("서비스 등록 성공");
      onClickNextStep();
    } catch (err) {
      alert("서비스 등록 실패");
    }
  };

  const finishCreateService = async () => {
    await getAllServiceList();
    resetStep();
    closeModal();
  };

  useEffect(() => {
    return () => {
      setName("");
      setEmail("");
      setOrganization("");
      resetStep();
    };
  }, []);

  if (step === 0) {
    return ReactDOM.createPortal(
      <ServiceApplyModalOne
        {...props}
        name={name}
        onChangeName={onChangeName}
      />,
      document.getElementById("modal")
    );
  } else if (step === 1) {
    return ReactDOM.createPortal(
      <ServiceApplyModalTwo
        {...props}
        email={email}
        organization={organization}
        onChangeEmail={onChangeEmail}
        onChangeOrganization={onChangeOrganization}
        createService={createService}
      />,
      document.getElementById("modal")
    );
  } else if (step === 2) {
    return ReactDOM.createPortal(
      <ServiceApplyModalThree
        finishCreateService={finishCreateService}
        closeModal={closeModal}
      />,
      document.getElementById("modal")
    );
  }

  return null;
};

export default memo(ServiceApplyModalPortal);
