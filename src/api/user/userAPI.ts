import axios from 'axios';

interface FormValues {
  inputName: string;
  inputId: string;
  inputPassword: string;
  inputPasswordCheck: string;
  inputEmail: string;
  inputPhone: string;
}

const postformValues = async (formValues: FormValues) => {
  const url = '/api/formValues';
  const response = await axios.post(url, { formValues });
  return response.data;
};

export { postformValues };
