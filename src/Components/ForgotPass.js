import React from "react";
import styled from "styled-components";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";

function ForgotPass() {
  return (
    <Container>
      <Content>
        <ForgotForms>
          <User>
            <LockOpenRoundedIcon fontSize="large" color="action" />
            <h3>FORGOT PASSWORD</h3>
          </User>
          <ForgotPassword>
            <label></label>
            <input type="text" placeholder="Create Password" />
          </ForgotPassword>
          <Password>
            <label></label>
            <input type="password" placeholder="Confirm Password" />
          </Password>
          <button>Save</button>
        </ForgotForms>

        <Button>
          <a href="/">
            Already Have An Account?
            <span>SignIn</span>
          </a>
        </Button>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  margin: auto;
  padding: 0;
  /* max-width: 1128px; */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;

const Content = styled.div`
  width: 25vw;
  height: 55vh;
  margin: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 35px;
    text-align: center;
  }
`;

const ForgotForms = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  border-radius: 20px;

  & > button {
    width: 50%;
    align-self: center;
    margin-top: 30px;
    padding: 5px;
    background-color: whitesmoke;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition-duration: 2s ease-in-out;
    &:active {
      box-shadow: -6px 1px 21px -10px rgba(0, 0, 0, 0.71) inset;
    }
  }
`;

const User = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const ForgotPassword = styled.div`
  padding: 20px 0px 20px 0px;

  & > input {
    padding: 5px;
    width: 100%;
    border: 1px solid black;
    border-radius: 10px;
    /* box-shadow: -1px 1px 20px -13px rgba(0, 0, 0, 0.71) inset; */
    :focus {
      outline: none;
    }
  }

  & > ::placeholder {
    text-align: left;
    opacity: 0.5;
    font-size: 25px;
  }
`;

const Password = styled.div`
  & > ::placeholder {
    text-align: left;
    opacity: 0.5;
    font-size: 25px;
  }

  & > input {
    padding: 5px;
    border: 1px solid black;
    width: 100%;
    border-radius: 10px;
    :focus {
      outline: none;
    }
  }
`;

const Button = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > a:last-child {
    color: black;

    & > span {
      margin-left: 7px;
      color: blue;
      cursor: pointer;
    }
  }

  a {
    color: blue;
    cursor: pointer;
  }
`;
export default ForgotPass;
