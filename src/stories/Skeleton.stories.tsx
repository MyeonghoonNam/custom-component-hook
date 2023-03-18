import Skeleton, {
  BoxProps,
  CircleProps,
  ParagraphProps,
} from '@components/Skeleton';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
};

export function Default() {
  return (
    <>
      <div style={{ float: 'left', marginRight: 16 }}>
        <Skeleton.Circle size={60} />
      </div>
      <div style={{ float: 'left', width: '80%' }}>
        <Skeleton.Paragraph line={3} />
      </div>
      <div style={{ clear: 'both' }} />

      <div style={{ float: 'left', marginRight: 16 }}>
        <Skeleton.Circle size={60} />
      </div>
      <div style={{ float: 'left', width: '80%' }}>
        <Skeleton.Paragraph line={3} />
      </div>
      <div style={{ clear: 'both' }} />

      <div style={{ float: 'left', marginRight: 16 }}>
        <Skeleton.Circle size={60} />
      </div>
      <div style={{ float: 'left', width: '80%' }}>
        <Skeleton.Paragraph line={3} />
      </div>
      <div style={{ clear: 'both' }} />
    </>
  );
}

export function Box(args: BoxProps) {
  return <Skeleton.Box {...args} />;
}

Box.argTypes = {
  width: { defaultValue: 200, control: 'number' },
  height: { defaultValue: 100, control: 'number' },
};

export function Circle(args: CircleProps) {
  return <Skeleton.Circle {...args} />;
}

Circle.argTypes = {
  size: { defaultValue: 200, control: 'number' },
};

export function Paragraph(args: ParagraphProps) {
  return <Skeleton.Paragraph {...args} />;
}

Paragraph.argTypes = {
  line: { defaultValue: 3, control: 'number' },
};
