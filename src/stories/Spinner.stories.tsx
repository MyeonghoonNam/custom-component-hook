import Spinner, { IProps } from '@components/Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    size: { defaultValue: 24, control: { type: 'number' } },
    color: { control: { type: 'color' } },
    bacgroundColor: { control: { type: 'color' } },
  },
};

export function Default(args: IProps) {
  return <Spinner {...args} />;
}
