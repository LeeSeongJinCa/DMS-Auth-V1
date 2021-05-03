import React, { memo, useEffect, useState } from "react";

import { getStudentInfo } from "../../utils/api/apis";

type Props = {
  openModal: () => void;
  removeService: () => Promise<void>;
};

const Menu = ({ openModal, removeService }: Props) => {
  const [info, setInfo] = useState<string>("");

  const getInfo = async () => {
    const res = await getStudentInfo();
    const { student_name, student_number } = res.data;
    const num = student_number.toString();
    setInfo(
      `${num[0]}학년 ${num[1]}반 ${num.slice(2, num.length)}번 ${student_name}`
    );
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="user-info">
      <h3>{info}</h3>
      <button onClick={openModal} className="apply">
        서비스 등록
      </button>
      <button onClick={removeService} className="remove">
        서비스 삭제
      </button>
      <a href="/">로그아웃</a>
    </div>
  );
};

export default memo(Menu);
