import styled from "@emotion/styled";

export const MainWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #39e2ba;
  color: white;
  > div {
    text-align: center;
    > h1,
    h2,
    h3 {
      line-height: 1.5;
      text-shadow: 0 3px 6px rgba(0, 0, 0, 20%);
    }
    > h1 {
      font-size: 48px;
    }
    > h2 {
      font-size: 28px;
    }
    > h3 {
      font-size: 16px;
    }
    > button {
      margin-top: 8px;
      padding: 12px 48px;
      border: 0;
      border-radius: 18px;
      color: white;
      background: linear-gradient(to bottom right, #19c49b, #71dfc4);
    }
  }
`;
