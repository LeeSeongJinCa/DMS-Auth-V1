import React, { memo } from "react";
import { useRecoilValue } from "recoil";

import { ItemWrap } from "./style";

import { close, itemDot } from "../../assets";
import useInput from "../../utils/hooks/useInput";
import { deleteURI, postURI } from "../../utils/api/apis";
import { serviceInfoState } from "../../atoms/dashboard";

type Props = {
  getService: () => Promise<void>;
};

type RedirectItemType = {
  auth_id: string;
  url: string;
  getService: () => Promise<void>;
};

const RedirectItem = ({ auth_id, url, getService }: RedirectItemType) => {
  const removeURI = async () => {
    if (!confirm("redirect uri를 삭제하시겠습니까?")) return;

    try {
      await deleteURI(auth_id, url);
      await getService();
      alert("삭제 성공");
    } catch (err) {
      alert("삭제 실패");
    }
  };

  return (
    <ItemWrap>
      <div>
        <img src={itemDot} alt="dot" title="dot" />
        <span>{url}</span>
      </div>
      <img
        src={close}
        alt="remove"
        title="remove"
        className="remove"
        onClick={removeURI}
      />
    </ItemWrap>
  );
};

const RedirectURIs = ({ getService }: Props) => {
  const { auth_id, redirect_uris } = useRecoilValue(serviceInfoState);
  const [uri, onChangeURI, setURI] = useInput();

  const addURI = async () => {
    try {
      await postURI(auth_id, [uri]);
      await getService();
      setURI("");
      alert("추가 성공");
    } catch (err) {
      alert("추가 실패");
    }
  };

  return (
    <div className="redirect-url">
      <h2>Redirect URIs</h2>
      <p>정상적으로 로그인을 한 후, Redirect 될 URI입니다.</p>
      <div>
        <ul>
          {redirect_uris.map(url => (
            <RedirectItem
              key={url}
              auth_id={auth_id}
              url={url}
              getService={getService}
            />
          ))}
        </ul>
        <div className="add-redirect-url">
          <input
            type="text"
            value={uri}
            onChange={onChangeURI}
            onKeyPress={e => e.key === "Enter" && addURI()}
          />
          <button onClick={addURI}>추가</button>
        </div>
      </div>
    </div>
  );
};

export default memo(RedirectURIs);
