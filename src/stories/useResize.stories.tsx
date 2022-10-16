import styled from '@emotion/styled';
import useResize from '@hooks/useResize';
import Image from '@components/Image';
import { useState } from 'react';

export default {
	title: 'Hooks/useResize',
};

const Background = styled.div`
	width: 100%;
	height: 400px;
	background-color: blue;
`;

export function Default() {
	const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
	const ref = useResize((rect) => {
		setImageSize(() => ({
			width: rect.width,
			height: rect.height,
		}));
	});

	return (
		<Background ref={ref}>
			<Image
				alt="useResize"
				src="https://picsum.photos/1000"
				width={imageSize.width}
				height={imageSize.height}
				mode="contain"
			/>
		</Background>
	);
}
