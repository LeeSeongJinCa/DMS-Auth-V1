import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router";

import { BASE_URL } from "../../utils/api/client";
import urlParams from "../../utils/function/urlParams";

const code = urlParams.get("code");

type AccessToken = { access_token: string };

const RedirectCode = () => {
  const history = useHistory();

  const postCode = async () => {
    const {
      data: { access_token }
    } = await axios.post<AccessToken>(`${BASE_URL}/service/auth`, {
      code: code
    });

    localStorage.setItem("access_token", access_token);
    history.push("/dashboard");
  };

  useEffect(() => {
    postCode();
  }, []);

  return (
    <div>
      <h1>DMS Auth</h1>
      <h2>잠시만 기다리세요!</h2>
      <p>다른 페이지로 리다이렉트 중입니다.</p>
    </div>
  );
};

export default RedirectCode;
