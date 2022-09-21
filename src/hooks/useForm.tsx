import React, { useState } from 'react';

interface IProps {
	initialState: {
		[key: string]: string;
	};
	validate: (values: { [key: string]: string }) => { [key: string]: string };
	onSubmit: () => Promise<void>;
}

const useForm = ({ initialState, validate, onSubmit }: IProps) => {
	const [values, setValues] = useState(initialState);
	const [errors, setErrors] = useState(initialState);
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setValues((state) => ({ ...state, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(() => true);

		const newErrors = validate(values);

		if (Object.keys(newErrors).length === 0) {
			// 비동기작업
			await onSubmit();
		}

		setErrors(newErrors);
		setIsLoading(() => false);
	};

	return {
		values,
		errors,
		isLoading,
		handleChange,
		handleSubmit,
	};
};

export default useForm;
