import axios from 'axios';

interface FormValues {
  inputName?: string;
  inputId: string;
  inputPassword: string;
  inputPasswordCheck?: string;
  inputEmail?: string;
  inputPhone?: string;
}

const postUserValues = async (formValues: FormValues) => {
  const url = '/api/user';
  const response = await axios.post(url, { formValues });
  return response.data;
};

const getUserValues = async (
  inputId: string,
  inputPassword: string,
): Promise<FormValues> => {
  const url = `/api/user?inputId=${encodeURIComponent(inputId)}&inputPassword=${encodeURIComponent(inputPassword)}`;
  const response = await axios.get<FormValues>(url);
  return response.data;
};

export { postUserValues, getUserValues };
