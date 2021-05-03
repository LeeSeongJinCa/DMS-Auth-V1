import React, { memo, MouseEvent } from "react";

import { dmsLogoMint } from "../../assets";
import { Service } from "../../utils/api/apis";

type Props = {
  services: Service[];
  authId: string;
  onClickAuthId: (e: MouseEvent<HTMLLIElement>) => void;
};

type ServiceItemProp = {
  id: string;
  name: string;
  authId: string;
  logo_uri: string;
  onClickAuthId: (e: MouseEvent<HTMLLIElement>) => void;
};

const ServiceItem = ({
  id,
  name,
  authId,
  logo_uri,
  onClickAuthId
}: ServiceItemProp) => {
  return (
    <li
      className={authId === id ? "selected" : ""}
      data-auth-id={id}
      onClick={onClickAuthId}
    >
      <img src={dmsLogoMint} alt="auth logo" title={`auth logo ${logo_uri}`} />
      <div>
        <h3>{name}</h3>
        <p>{id}</p>
      </div>
    </li>
  );
};

const ServiceList = ({ services, authId, onClickAuthId }: Props) => {
  return (
    <div className="service-list">
      <ul>
        {services.map(({ auth_id, logo_uri, service_name }) => (
          <ServiceItem
            key={auth_id}
            id={auth_id}
            authId={authId}
            name={service_name}
            logo_uri={logo_uri}
            onClickAuthId={onClickAuthId}
          />
        ))}
      </ul>
    </div>
  );
};

export default memo(ServiceList);
