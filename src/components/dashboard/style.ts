import styled from "@emotion/styled";

export const DashboardWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px 0;
  &.empty {
    > main,
    .service-list {
      opacity: 0;
    }
  }
  > img {
    width: 60px;
    height: 60px;
    align-self: flex-start;
  }
  > p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
  }
  > main {
    margin: 0 24px;
    padding: 24px;
    border-radius: 24px;
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 16%);
    > h1 {
      margin-bottom: 18px;
      font-size: 25px;
      font-weight: bold;
    }
    > div {
      display: flex;
      > div {
        display: flex;
        flex-direction: column;
        &:first-of-type {
          margin-right: 12px;
        }
        &:last-of-type {
          margin-left: 12px;
        }
        > div {
          width: 400px;
          padding: 24px;
          border-radius: 24px;
          background-color: #ffffff;
          box-shadow: 6px 6px 12px rgba(0, 0, 0, 16%);
          &:first-of-type {
            margin-bottom: 12px;
          }
          &:last-of-type {
            margin-top: 12px;
          }
          &.redirect-url {
            flex: 1;
            position: relative;
            display: flex;
            flex-direction: column;
            > div {
              flex: 1;
              display: flex;
              flex-direction: column;
              > ul {
                flex: 1;
              }
              > .add-redirect-url {
                display: flex;
                height: 28px;
                border: 1px solid var(--symbol-color);
                border-radius: 10px;
                > input {
                  flex: 1;
                  padding-left: 8px;
                  border: 0;
                  border-radius: 10px 0 0 10px;
                }
                > button {
                  margin: 0;
                  padding: 0 28px;
                  border: 1px solid var(--symbol-color);
                  border-radius: 8px;
                  color: white;
                  background-color: var(--symbol-color);
                }
              }
            }
          }
          > h2 {
            font-size: 20px;
          }
          > p {
            font-size: 12px;
            margin-bottom: 12px;
          }
          .logo-wrap {
            border: 0;
            > p {
              font-size: 15px;
            }
            > div {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 140px;
              height: 140px;
              border: 1px solid #9a9a9a;
              border-radius: 8px;
              > img {
                max-width: 100%;
                max-height: 100%;
                border: 1px solid #9a9a9a;
                border-radius: 8px;
              }
            }
          }
        }
      }
    }
    button {
      float: right;
      margin-top: 12px;
      padding: 6px 32px;
      border: 0;
      border-radius: 10px;
      background-color: var(--symbol-color);
      color: white;
      font-size: 16px;
    }
  }
  > aside {
    display: flex;
    flex-direction: column;
    margin: 0 24px;
    > div {
      width: 400px;
      padding: 24px;
      border-radius: 24px;
      box-shadow: 3px 3px 12px rgba(0, 0, 0, 16%);
      background-color: white;
      &:first-of-type {
        margin-bottom: 12px;
      }
      &:last-of-type {
        margin-top: 12px;
      }
      &.service-list {
        flex: 1;
        ul {
          height: 580px;
          overflow-y: scroll;
          &::-webkit-scrollbar {
            width: 4px;
          }
          &::-webkit-scrollbar-thumb {
            background-color: #3d3d3d;
          }
          &::-webkit-scrollbar-track {
            background-color: transparent;
          }
          > li {
            display: flex;
            margin-bottom: 12px;
            padding-bottom: 4px;
            border-bottom: 1px solid #c2c2c2;
            cursor: pointer;
            &.selected {
              background-color: rgba(66, 255, 118, 50%);
            }
            > img {
              margin-right: 12px;
              width: 40px;
              height: 40px;
              border-radius: 50%;
            }
            > div {
              display: flex;
              flex-direction: column;
              justify-content: center;
              > p {
                color: #818181;
                font-size: 8px;
                &:first-of-type {
                  font-size: 16px;
                }
              }
            }
          }
        }
      }
      &.user-info {
        text-align: right;
        font-size: 16px;
        > * {
          margin: 4px 0;
        }
        > button {
          width: 100%;
          padding: 8px 24px;
          border-radius: 10px;
          color: white;
          font-size: 16px;
          text-align: right;
          &.apply {
            border: 1px solid var(--symbol-color);
            background-color: var(--symbol-color);
          }
          &.remove {
            border: 1px solid #ff6d6d;
            background-color: #ff6d6d;
          }
        }
        > a {
          display: block;
          padding: 8px 24px;
          border: 1px solid #707070;
          border-radius: 10px;
          color: black;
          text-decoration: none;
        }
      }
    }
  }
  @media screen and (max-width: 1550px) {
    > main > div > div > div {
      width: 350px;
    }
    > aside > div {
      width: 350px;
    }
  }
  @media screen and (max-width: 1400px) {
    > main > div > div > div {
      width: 300px;
    }
    > aside > div {
      width: 300px;
    }
  }
  @media screen and (max-width: 1250px) {
    > main > div > div > div {
      width: 250px;
    }
    > aside > div {
      width: 250px;
    }
  }
  @media screen and (max-width: 1100px) {
    > main > div {
      flex-direction: column;
      > div:first-of-type {
        margin-right: 0;
        margin-bottom: 12px;
      }
      > div:last-of-type {
        margin-left: 0;
        margin-top: 12px;
      }
      > div > div {
        width: auto;
      }
    }
    > aside > div {
      width: auto;
    }
  }
  @media screen and (max-width: 800px) {
    & {
      display: block;
    }
    > img {
      display: block;
      margin: auto;
    }
    > aside {
      margin: 24px;
    }
  }
`;

export const InputWrap = styled.label<{ disabled: boolean }>`
  display: block;
  margin-bottom: 12px;
  background-color: transparent;
  > p {
    font-size: 15px;
  }
  > div {
    position: relative;
    display: flex;
    height: 16px;
    padding: 4px 8px;
    border: 1px solid #9a9a9a;
    ${({ disabled }) => disabled && `background-color: #cbcbcb;`};
    > input {
      flex: 1;
      border: 0;
      height: 100%;
      background-color: transparent;
    }
    > button {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 2px;
      border: 0;
      border-radius: 6px;
      background-color: white;
      color: black;
      > span {
        margin-left: 4px;
        font-size: 12px;
      }
    }
  }
`;

export const ItemWrap = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #818181;
  > div {
    display: flex;
    align-items: center;
    width: 10px;
    height: 10px;
    > span {
      margin-left: 8px;
      font-size: 12px;
    }
  }
  > img {
    width: 12px;
    height: 12px;
    border: 1px solid black;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const ServiceApplyModalBackWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 50%);
`;

export const ServiceApplyModalWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  padding: 32px 40px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 16%);
  > h1 {
    font-size: 24px;
  }
  > p {
    font-size: 14px;
  }
  > img {
    position: absolute;
    top: 32px;
    right: 40px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
  > label {
    display: flex;
    height: 28px;
    border: 1px solid var(--symbol-color);
    border-radius: 10px;
    &:first-of-type {
      margin-top: 60px;
    }
    &:not(:first-of-type) {
      margin-top: 12px;
    }
    > input {
      flex: 1;
      padding: 8px 12px;
      border: 0;
      border-radius: 10px;
    }
  }
  button {
    padding: 0 24px;
    border: 1px solid var(--symbol-color);
    border-radius: 8px;
    background-color: var(--symbol-color);
    color: white;
    &.finish {
      float: right;
      margin-top: 12px;
      padding: 8px 32px;
    }
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 32px 0;
    > *:not(img) {
      margin-right: 48px;
      margin-left: 48px;
    }
  }
`;
