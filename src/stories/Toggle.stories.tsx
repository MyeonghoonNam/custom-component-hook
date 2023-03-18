import Toggle, { IProps } from '@components/Toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle,
};

export function Default(args: IProps) {
  return <Toggle {...args} />;
}
