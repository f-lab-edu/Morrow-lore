import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { postUserValues, getUserValues } from '../api/user/userAPI';

interface FormValues {
  inputName?: string;
  inputId: string;
  inputPassword: string;
  inputPasswordCheck?: string;
  inputEmail?: string;
  inputPhone?: string;
}

interface FormErrors {
  [key: string]: string;
}

type FormType = 'SignUp' | 'Login';

const useValidationForm = (formType: FormType) => {
  const navigate = useNavigate();
  const initialState: FormValues =
    formType === 'SignUp'
      ? {
          inputName: '',
          inputId: '',
          inputPassword: '',
          inputPasswordCheck: '',
          inputEmail: '',
          inputPhone: '',
        }
      : {
          inputId: '',
          inputPassword: '',
        };

  const [formValues, setFormValues] = useState<FormValues>(initialState);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((values) => ({ ...values, [name]: value }));
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(formValues, formType);
    if (Object.keys(errors).length === 0) {
      try {
        // 로그인과 회원가입 API 호출 분기
        if (formType === 'SignUp') {
          const { inputName, inputId, inputPassword, inputEmail, inputPhone } =
            formValues;
          await postUserValues({
            inputName,
            inputId,
            inputPassword,
            inputEmail,
            inputPhone,
          });
          navigate('/home');
        } else {
          const { inputId, inputPassword } = formValues;
          await getUserValues(inputId, inputPassword);
          navigate('/login');
        }
      } catch (error) {
        console.error('Form submission failed', error);
      }
    } else {
      setFormErrors(errors);
    }
  };

  const validate = (values: FormValues, formType: FormType): FormErrors => {
    let errors: FormErrors = {};

    if (formType === 'Login') {
      if (!values.inputId.trim()) errors.inputId = '아이디를 입력해주세요.';
      if (!values.inputPassword)
        errors.inputPassword = '비밀번호를 입력해주세요.';
    }

    if (formType === 'SignUp') {
      if (!values.inputName?.trim()) errors.inputName = '이름을 입력해주세요.';
      if (!values.inputEmail) errors.inputEmail = '이메일을 입력해주세요.';
      else if (!/\S+@\S+\.\S+/.test(values.inputEmail))
        errors.inputEmail = '유효한 이메일 주소를 입력해주세요.';
      if (!values.inputPhone?.trim())
        errors.inputPhone = '전화번호를 입력해주세요.';
      else if (!/^\d{10,11}$/.test(values.inputPhone))
        errors.inputPhone = '유효한 전화번호를 입력해주세요.';

      if (!values.inputId.trim()) errors.inputId = '아이디를 입력해주세요.';
      if (!values.inputPassword)
        errors.inputPassword = '비밀번호를 입력해주세요.';
      else if (values.inputPassword.length < 6)
        errors.inputPassword = '비밀번호는 6자 이상이어야 합니다.';
      if (values.inputPassword !== values.inputPasswordCheck)
        errors.inputPasswordCheck = '비밀번호가 일치하지 않습니다.';
    }
    return errors;
  };

  return { formValues, formErrors, handleChange, handleSubmit };
};

export { useValidationForm };
