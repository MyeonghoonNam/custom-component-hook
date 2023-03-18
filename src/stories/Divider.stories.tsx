import Divider from '@components/Divider';
import Text from '@components/Text';

export default {
  title: 'Components/Divider',
  component: Divider,
};

export function Horizontal() {
  return (
    <div>
      <Text>Text 1</Text>
      <Divider type="horizontal" size={8} />
      <Text>Text 2</Text>
    </div>
  );
}

export function Vertical() {
  return (
    <div>
      <Text>Text 1</Text>
      <Divider type="vertical" size={8} />
      <Text>Text 2</Text>
    </div>
  );
}
