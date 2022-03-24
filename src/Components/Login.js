import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Login() {
  return (
    <Container>
      <Content>
        <Forms>
          <User>
            <AccountCircleIcon fontSize="large" color="action" />
            <h3>LOGIN</h3>
          </User>
          <Email>
            <label></label>
            <input type="email" placeholder="Email" />
          </Email>
          <Password>
            <label></label>
            <input type="password" placeholder="Password" />
          </Password>
          <button>
            <a href="/home">Login</a>
          </button>
        </Forms>

        <Button>
          <a href="/forgot">Forgot Password?</a>
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

const Forms = styled.div`
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

    &:hover {
      background-color: blue;
      color: white;
    }

    &:active {
      box-shadow: -6px 1px 21px -10px rgba(0, 0, 0, 0.71) inset;
    }

    & > a {
      display: flex;
      align-items: center;
      justify-content: center;
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

const Email = styled.div`
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
  padding-left: 20px;
  font-size: 20px;
  display: flex;
  justify-content: left;

  a {
    color: blue;
  }
`;

export default Login;
