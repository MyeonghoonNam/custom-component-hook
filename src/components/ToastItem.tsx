import styled from '@emotion/styled';
import useTimeout from '@hooks/useTimeout';
import { useState } from 'react';
import Text from './Text';

interface Props {
	message: string;
	duration: number;
	onDone: () => void;
}

interface ContainerProps {
	show: boolean;
}

const Container = styled.div<ContainerProps>`
	position: relative;
	display: flex;
	width: 250px;
	height: 100px;
	padding: 0 20px;
	align-items: center;
	border-radius: 4px;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
	border: 1px solid #ccc;
	background-color: white;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
	opacity: ${({ show }) => (show ? 1 : 0)};
	transition: opacity 0.4s ease-out;
	white-space: pre-wrap;

	&:first-of-type {
		animation: move 0.4s ease-out forwards;
	}

	&:not(:first-of-type) {
		margin-top: 8px;
	}

	@keyframes move {
		0% {
			margin-top: 80px;
		}
		100% {
			margin-top: 0;
		}
	}
`;

type ProgressBarProps = Pick<Props, 'duration'>;

const ProgressBar = styled.div<ProgressBarProps>`
	position: absolute;
	top: 0;
	left: 0;
	width: 0;
	height: 4px;
	background-color: #44b;
	animation-name: progress;
	animation-timing-function: linear;
	animation-fill-mode: forwards;
	animation-duration: ${({ duration }) => duration && `${duration}ms`};

	@keyframes progress {
		0% {
			width: 0;
		}
		100% {
			width: 100%;
		}
	}
`;

function ToastItem({ message, duration, onDone }: Props) {
	const [show, setShow] = useState(true);

	useTimeout(() => {
		setShow(() => false);
		setTimeout(() => onDone(), 400);
	}, duration);

	return (
		<Container show={show}>
			<ProgressBar duration={duration} />
			<Text>{message}</Text>
		</Container>
	);
}

export default ToastItem;
