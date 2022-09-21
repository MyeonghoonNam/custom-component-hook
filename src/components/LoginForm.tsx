import styled from '@emotion/styled';
import useForm from '@hooks/useForm';
import sleep from '@utils/sleep';
import Input from './Input';
import Button from './Button';
import ErrorText from './ErrorText';

interface IValidate {
	[key: string]: string;
}

const Container = styled.form`
	width: 400px;
	padding: 16px;
	background-color: white;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
`;

const Title = styled.h1`
	font-size: 24px;
	text-align: center;
`;

function LoginForm() {
	const initialState = {
		id: '',
		password: '',
	};

	const validate = ({ id, password }: IValidate) => {
		const newErrors: IValidate = {};

		if (!id) {
			newErrors.id = '아이디를 입력해주세요.';
		}

		if (!password) {
			newErrors.password = '비밀번호를 입력해주세요.';
		}

		return newErrors;
	};

	const onSubmit = async () => {
		try {
			await sleep();
			// eslint-disable-next-line no-console
			console.log('submit success');
		} catch (e) {
			// eslint-disable-next-line no-console
			console.log(e);
		}
	};

	const { errors, isLoading, handleChange, handleSubmit } = useForm({
		initialState,
		validate,
		onSubmit,
	});

	return (
		<Container onSubmit={handleSubmit}>
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
		</Container>
	);
}

export default LoginForm;
