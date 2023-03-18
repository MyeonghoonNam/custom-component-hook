import Tab from '@components/Tap';

export default {
  title: 'Components/Tab',
  component: Tab,
};

export function Default() {
  return (
    <Tab>
      <Tab.Item title="Item 1" index="item1">
        Content 1
      </Tab.Item>
      <Tab.Item title="Item 2" index="item2">
        Content 2
      </Tab.Item>
      <Tab.Item title="Item 3" index="item3">
        Content 3
      </Tab.Item>
    </Tab>
  );
}
