import Upload, { IProps } from '@components/Upload';
import Image from '@components/Image';
import { useState, useCallback } from 'react';

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
  const [viewImageSrc, setViewImageSrc] = useState('');

  const handleChange = useCallback((file: File) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;

      if (base64) {
        setViewImageSrc(base64.toString());
      }
    };

    reader.readAsDataURL(file);
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

export function DragAndDrop() {
  return (
    <Upload name="image" accept="image/*" droppable>
      {(file, dragging) => (
        <div
          style={{
            width: 300,
            height: 100,
            border: '4px dashed #aaa',
            borderColor: dragging ? 'black' : '#aaa',
            cursor: 'pointer',
          }}
        >
          {file ? file.name : 'Click or Drag'}
        </div>
      )}
    </Upload>
  );
}
