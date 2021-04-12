import React, { FC } from "react";

import { dmsLogoMint } from "../assets";

interface Props {}

const Main: FC<Props> = () => {
  return (
    <div>
      <p>main</p>
      <img src={dmsLogoMint} alt="logo" />
    </div>
  );
};

export default Main;
