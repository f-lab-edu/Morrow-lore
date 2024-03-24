import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes/ManageCenterRotue';
import { useValidationForm } from '../hooks/useFormValidation';

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
  width: 20%;

  ul {
    display: flex;
    flex-direction: column;

    li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }
  }
`;

const StyledSignupLabel = styled.label`
  width: 50%;
  font-weight: 500;
`;

const StyledSignupInput = styled.input`
  width: 100%;
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

const StyledInputWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  p {
    margin: 5px 0 10px;
    font-size: 12px;
    color: red;
  }
`;

const StyledSignupButtonBox = styled.div`
  display: flex;
  width: 200px;
  margin: 0 auto;
  justify-content: space-between;
`;

const StyledSignupButton = styled.button`
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

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const { formValues, formErrors, handleChange, handleSubmit } =
    useValidationForm('SignUp');
  const handleCancleClick = () => {
    navigate(ROUTES.LOGINL);
  };

  return (
    <StyledSignup>
      <h1>회원가입</h1>
      <StyledSignupForm onSubmit={handleSubmit}>
        <ul>
          <li>
            <StyledSignupLabel htmlFor="inputName">이름</StyledSignupLabel>
            <StyledInputWrap>
              <StyledSignupInput
                type="text"
                name="inputName"
                id="inputName"
                value={formValues.inputName}
                onChange={handleChange}
                required
              />
              {formErrors.inputName && <p>{formErrors.inputName}</p>}
            </StyledInputWrap>
          </li>
          <li>
            <StyledSignupLabel htmlFor="inputId">아이디</StyledSignupLabel>
            <StyledInputWrap>
              <StyledSignupInput
                type="text"
                name="inputId"
                id="inputId"
                value={formValues.inputId}
                onChange={handleChange}
                required
              />
              {formErrors.inputId && <p>{formErrors.inputId}</p>}
            </StyledInputWrap>
          </li>
          <li>
            <StyledSignupLabel htmlFor="inputPassword">
              비밀번호
            </StyledSignupLabel>
            <StyledInputWrap>
              <StyledSignupInput
                type="password"
                name="inputPassword"
                id="inputPassword"
                value={formValues.inputPassword}
                onChange={handleChange}
                required
              />
              {formErrors.inputPassword && <p>{formErrors.inputPassword}</p>}
            </StyledInputWrap>
          </li>
          <li>
            <StyledSignupLabel htmlFor="inputPassword">
              비밀번호 확인
            </StyledSignupLabel>
            <StyledInputWrap>
              <StyledSignupInput
                type="password"
                name="inputPasswordCheck"
                id="inputPasswordCheck"
                value={formValues.inputPasswordCheck}
                onChange={handleChange}
                required
              />
              {formErrors.inputPasswordCheck && (
                <p>{formErrors.inputPasswordCheck}</p>
              )}
            </StyledInputWrap>
          </li>
          <li>
            <StyledSignupLabel htmlFor="inputEmail">이메일</StyledSignupLabel>
            <StyledInputWrap>
              <StyledSignupInput
                type="email"
                name="inputEmail"
                id="inputEmail"
                value={formValues.inputEmail}
                onChange={handleChange}
                required
              />
              {formErrors.inputEmail && <p>{formErrors.inputEmail}</p>}
            </StyledInputWrap>
          </li>
          <li>
            <StyledSignupLabel htmlFor="inputPhone">전화번호</StyledSignupLabel>
            <StyledInputWrap>
              <StyledSignupInput
                type="tel"
                name="inputPhone"
                id="inputPhone"
                value={formValues.inputPhone}
                onChange={handleChange}
                required
              />
              {formErrors.inputPhone && <p>{formErrors.inputPhone}</p>}
            </StyledInputWrap>
          </li>
        </ul>
        <StyledSignupButtonBox>
          <StyledSignupButton type="button" onClick={handleCancleClick}>
            취소
          </StyledSignupButton>
          <StyledSignupButton type="submit">완료</StyledSignupButton>
        </StyledSignupButtonBox>
      </StyledSignupForm>
    </StyledSignup>
  );
};

export default SignUpPage;
