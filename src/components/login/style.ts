import styled from "@emotion/styled";

export const LoginWrap = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px 32px;
  border-radius: 24px;
  background-color: white;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 16%);
  text-align: center;
  > div {
    text-align: center;
    > img {
      width: 48px;
      height: 48px;
    }
    > button {
      margin-top: 12px;
      padding: 8px 48px;
      border: 1px solid var(--symbol-color);
      border-radius: 8px;
      background-color: var(--symbol-color);
      color: white;
      text-align: center;
    }
  }
  > h1 {
    font-size: 24px;
  }
  > main {
    width: 260px;
  }
  > .login-main {
    margin: 24px 0;
    > label {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      padding: 4px;
      border-bottom: 1px solid #707070;
      > img {
        width: 16px;
        height: 16px;
      }
      > input {
        width: 100%;
        margin-left: 6px;
        padding: 0 4px;
        border: 0;
        background-color: transparent;
      }
    }
  }
  > .agreement-main {
    > p {
      margin: 8px 0;
    }
    > div {
      display: flex;
      align-items: center;
      margin: 8px;
      > img {
        width: 18px;
        height: 18px;
        margin-right: 8px;
        border: 1px solid black;
        border-radius: 50%;
      }
      > span {
        color: #818181;
        font-size: 14px;
      }
    }
  }
  .error-main {
    display: flex;
    width: 400px;
    margin: 12px 0;
    border: 1px solid #fa3e3d;
    border-radius: 4px;
    > div {
      width: 15%;
      padding-top: 12px;
      background-color: #fa3e3d;
      box-sizing: border-box;
      > img {
        width: 24px;
        height: 24px;
      }
    }
    > p {
      width: 90%;
      padding: 12px;
      font-size: 14px;
      box-sizing: border-box;
      text-align: left;
    }
  }
`;
