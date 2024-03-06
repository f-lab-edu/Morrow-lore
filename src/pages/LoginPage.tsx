import React from 'react';
import styled from 'styled-components';

const StyledLogin = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin-bottom: 2rem;
  }
`;

const StyledLoginForm = styled.form`
  width: 30%;

  ul {
    display: flex;
    flex-direction: column;

    li {
      display: flex;
      margin-bottom: 10px;
    }
  }
`;

const StyledLoginLabel = styled.label`
  width: 80px;
  font-weight: 500;
`;

const StyledLoginInput = styled.input`
  &:required {
    border: 2px solid green;
  }

  &:invalid {
    border: 2px solid red;
  }

  &:valid {
    border: 2px solid red;
  }
`;

const StyledLoginButton = styled.button`
  display: block;
  width: 100px;
  text-align: center;
  font-weight: 600;
  padding: 10px;
  outline: none;
  background: rgb(29, 29, 31, 0.1);
  font-size: 1rem;
  border: 1px solid rgb(29, 29, 31, 0.5);
  margin: 1rem auto;
`;

const LoginPage: React.FC = () => {
  return (
    <StyledLogin>
      <h1>로그인</h1>
      <StyledLoginForm action="login">
        <ul>
          <li>
            <StyledLoginLabel htmlFor="inputId">아이디</StyledLoginLabel>
            <StyledLoginInput
              type="text"
              name="inputId"
              id="inputId"
              required
            />
          </li>
          <li>
            <StyledLoginLabel htmlFor="inputPassword">
              비밀번호
            </StyledLoginLabel>
            <StyledLoginInput
              type="password"
              name="inputPassword"
              id="inputPassword"
              required
            />
          </li>
        </ul>
        <StyledLoginButton type="submit">로그인</StyledLoginButton>
      </StyledLoginForm>
      <StyledLoginButton type="button">회원가입</StyledLoginButton>
    </StyledLogin>
  );
};

export default LoginPage;
