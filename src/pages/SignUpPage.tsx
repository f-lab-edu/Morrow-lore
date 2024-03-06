import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes/ManageCenterRotue';

const StyledSignup = styled.section`
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

const StyledSignupForm = styled.form`
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

const StyledSignupLabel = styled.label`
  width: 80px;
  font-weight: 500;
`;

const StyledSignupInput = styled.input`
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

const StyledSignupButton = styled.button`
  outline: none;
  border: 1px solid rgb(29, 29, 31, 0.1);
`;

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const handleSuccessClick = () => {
    navigate(ROUTES.LOGINL);
  };

  return (
    <StyledSignup>
      <h1>회원가입</h1>
      <StyledSignupForm action="signup">
        <ul>
          <li>
            <StyledSignupLabel htmlFor="inputId">이름</StyledSignupLabel>
            <StyledSignupInput
              type="text"
              name="inputName"
              id="inputName"
              required
            />
          </li>
          <li>
            <StyledSignupLabel htmlFor="inputId">아이디</StyledSignupLabel>
            <StyledSignupInput
              type="text"
              name="inputId"
              id="inputId"
              required
            />
          </li>
          <li>
            <StyledSignupLabel htmlFor="inputPassword">
              비밀번호
            </StyledSignupLabel>
            <StyledSignupInput
              type="password"
              name="inputPassword"
              id="inputPassword"
              required
            />
          </li>
          <li>
            <StyledSignupLabel htmlFor="inputPassword">
              비밀번호 확인
            </StyledSignupLabel>
            <StyledSignupInput
              type="password"
              name="inputPasswordCheck"
              id="inputPasswordCheck"
              required
            />
          </li>
          <li>
            <StyledSignupLabel htmlFor="inputEmail">이메일</StyledSignupLabel>
            <StyledSignupInput
              type="email"
              name="inputEmail"
              id="inputEmail"
              required
            />
          </li>
          <li>
            <StyledSignupLabel htmlFor="inputPhone">전화번호</StyledSignupLabel>
            <StyledSignupInput
              type="tel"
              name="inputPhone"
              id="inputPhone"
              required
            />
          </li>
        </ul>
        <StyledSignupButton type="submit" onClick={handleSuccessClick}>
          완료
        </StyledSignupButton>
        <StyledSignupButton type="reset">취소</StyledSignupButton>
      </StyledSignupForm>
    </StyledSignup>
  );
};

export default SignUpPage;
