import useForm from '@hooks/useForm';
import sleep from '@utils/sleep';
import ContainerForm from './ContainerForm';
import Title from './Title';
import Input from './Input';
import Button from './Button';
import ErrorText from './ErrorText';

function LoginForm() {
  const { errors, isLoading, handleChange, handleSubmit } = useForm({
    initialState: {
      id: '',
      password: '',
    },
    validate: ({ id, password }) => {
      const newErrors: { [key: string]: string } = {};

      if (!id) {
        newErrors.id = '아이디를 입력해주세요.';
      }

      if (!password) {
        newErrors.password = '비밀번호를 입력해주세요.';
      }

      return newErrors;
    },
    onSubmit: async () => {
      try {
        await sleep();
        // eslint-disable-next-line no-console
        console.log('submit success');
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    },
  });

  return (
    <ContainerForm onSubmit={handleSubmit}>
      <Title>Login</Title>
      <Input
        type="text"
        width="100%"
        height="20px"
        name="id"
        placeholder="Id"
        onChange={handleChange}
      />
      {errors.id && <ErrorText>{errors.id}</ErrorText>}
      <Input
        type="password"
        width="100%"
        height="20px"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        style={{ marginTop: '8px' }}
      />
      {errors.password && <ErrorText>{errors.password}</ErrorText>}
      <Button
        type="submit"
        width="100%"
        height="32px"
        disabled={isLoading}
        style={{ marginTop: '16px' }}
      >
        Login
      </Button>
    </ContainerForm>
  );
}

export default LoginForm;
