import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useValidationForm } from '../hooks/useFormValidation';

import { ROUTES } from '../routes/ManageCenterRotue';

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
  width: 20%;

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
  width: 50%;
  font-weight: 500;
`;

const StyledLoginInput = styled.input`
  width: 50%;
  outline: none;

  &:required {
    border: 1px solid green;
  }

  &:invalid {
    border: 1px solid rgb(29, 29, 31, 0.3);
  }

  &:valid {
    border: 1px solid blue;
  }
`;

const StyledLoginButtonBox = styled.div`
  display: flex;
`;

const StyledLoginButton = styled.button`
  outline: none;
  border: 1px solid rgb(29, 29, 31, 0.1);
  padding: 10px 30px;
  margin: 10px;

  &:first-child {
    font-weight: 600;
    background-color: rgb(29, 29, 31, 0.1);
    transition: all 0.3s;

    &:hover {
      background-color: rgb(29, 29, 31, 0.3);
    }
  }

  &:last-child {
    font-weight: 600;
    color: #f7f7f7;
    background-color: rgb(82, 5, 123, 0.8);
    transition: all 0.3s;

    &:hover {
      background-color: rgb(82, 5, 123, 1);
    }
  }
`;

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { formValues, formErrors, handleChange, handleSubmit } =
    useValidationForm('Login');
  const handleLoginClick = () => {
    navigate(ROUTES.HOME);
  };
  const handleSignupClick = () => {
    navigate(ROUTES.SIGNUP);
  };

  return (
    <StyledLogin>
      <h1>로그인</h1>
      <StyledLoginForm action="login" onSubmit={handleSubmit}>
        <ul>
          <li>
            <StyledLoginLabel htmlFor="inputId">아이디</StyledLoginLabel>
            <StyledLoginInput
              type="text"
              name="inputId"
              id="inputId"
              value={formValues.inputId}
              onChange={handleChange}
              required
            />
            {formErrors.inputId && <p>{formErrors.inputId}</p>}
          </li>
          <li>
            <StyledLoginLabel htmlFor="inputPassword">
              비밀번호
            </StyledLoginLabel>
            <StyledLoginInput
              type="password"
              name="inputPassword"
              id="inputPassword"
              value={formValues.inputPassword}
              onChange={handleChange}
              required
            />
            {formErrors.inputId && <p>{formErrors.inputId}</p>}
          </li>
        </ul>
      </StyledLoginForm>
      <StyledLoginButtonBox>
        <StyledLoginButton type="submit" onClick={handleLoginClick}>
          로그인
        </StyledLoginButton>
        <StyledLoginButton type="button" onClick={handleSignupClick}>
          회원가입
        </StyledLoginButton>
      </StyledLoginButtonBox>
    </StyledLogin>
  );
};

export default LoginPage;
