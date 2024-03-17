import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postformValues } from '../api/user/userAPI';

interface FormValues {
  inputName: string;
  inputId: string;
  inputPassword: string;
  inputPasswordCheck: string;
  inputEmail: string;
  inputPhone: string;
}

interface FormErrors {
  [key: string]: string;
}

const useSignupForm = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<FormValues>({
    inputName: '',
    inputId: '',
    inputPassword: '',
    inputPasswordCheck: '',
    inputEmail: '',
    inputPhone: '',
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // 폼 제출 처리
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(formValues);
    if (Object.keys(errors).length === 0) {
      try {
        await postformValues(formValues);
        navigate('/home');
      } catch (error) {
        console.error('Signup failed', error);
      }
    } else {
      setFormErrors(errors);
    }
  };

  const validate = (values: FormValues): FormErrors => {
    let errors: FormErrors = {};

    if (!values.inputName.trim()) errors.inputName = '이름을 입력해주세요.';
    if (!values.inputId.trim()) errors.inputId = '아이디를 입력해주세요.';
    if (!values.inputPassword)
      errors.inputPassword = '비밀번호를 입력해주세요.';
    else if (values.inputPassword.length < 6)
      errors.inputPassword = '비밀번호는 6자 이상이어야 합니다.';
    if (values.inputPassword !== values.inputPasswordCheck)
      errors.inputPasswordCheck = '비밀번호가 일치하지 않습니다.';
    if (!values.inputEmail) errors.inputEmail = '이메일을 입력해주세요.';
    else if (!/\S+@\S+\.\S+/.test(values.inputEmail))
      errors.inputEmail = '유효한 이메일 주소를 입력해주세요.';
    if (!values.inputPhone.trim())
      errors.inputPhone = '전화번호를 입력해주세요.';
    else if (!/^\d{10,11}$/.test(values.inputPhone))
      errors.inputPhone = '유효한 전화번호를 입력해주세요.';

    return errors;
  };

  return { formValues, formErrors, handleChange, handleSubmit };
};

export { useSignupForm };
