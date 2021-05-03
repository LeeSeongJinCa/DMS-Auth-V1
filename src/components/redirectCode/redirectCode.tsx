import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { getAccessToken } from "../../utils/api/apis";

import urlParams from "../../utils/function/urlParams";

const code = urlParams.get("code");
const redirect_uri = urlParams.get("redirect_uri");

const RedirectCode = () => {
  const history = useHistory();

  const postCode = async () => {
    const { access_token } = (await getAccessToken(code)).data;

    localStorage.setItem("access_token", access_token);
    history.push("/dashboard");
  };

  useEffect(() => {
    if (redirect_uri) {
      window.location.href = `${redirect_uri}?code=${code}`;
    } else {
      postCode();
    }
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
