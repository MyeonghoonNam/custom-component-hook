import Upload, { IProps } from '@components/Upload';
import Image from '@components/Image';
import React, { useState, useCallback } from 'react';

export default {
	title: 'Components/Upload',
	component: Upload,
	argTypes: {
		onChange: { action: 'onChange' },
	},
};

export function Default(args: IProps) {
	return (
		<Upload {...args}>
			<button type="button">Upload</button>
		</Upload>
	);
}

export function Viewer() {
	// const [file, setFile] = useState<File | null>(null);
	const [viewImageSrc, setViewImageSrc] = useState('');

	const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const reader = new FileReader();

		reader.onloadend = () => {
			const base64 = reader.result;

			if (base64) {
				setViewImageSrc(base64.toString());
			}
		};

		const { files } = e.target;
		const chooseFile = files && files[0];

		if (chooseFile) {
			reader.readAsDataURL(chooseFile);
			// file 정보에 대한 후속 비동기 처리가 필요할 경우 state로 file 정보 관리
			// setFile(chooseFile);
		}
	}, []);

	return (
		<>
			<Upload name="image" accept="image/*" onChange={handleChange}>
				<button type="button">Upload</button>
			</Upload>

			{viewImageSrc && (
				<Image src={viewImageSrc} width={200} height={200} alt="img" />
			)}
		</>
	);
}
