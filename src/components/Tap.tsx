import styled from '@emotion/styled';
import React, { useState, useMemo, useCallback } from 'react';
import TabItem from './TabItem';

export interface Props {
  children: React.ReactNode;
  active?: number;
}

const TabContainer = styled.div`
  width: 420px;
`;

const TabItemContainer = styled.div`
  border-bottom: 2px solid #dd;
  background-color: #eee;
`;

function Tab({ children, active }: Props) {
  const childrenToArray = useCallback((children: React.ReactNode) => {
    return React.Children.toArray(children).filter((element) => {
      if (React.isValidElement(element)) {
        return true;
      }

      return false;
    });
  }, []);

  const [currentActive, setCurrentActive] = useState(() => {
    if (active) return active;

    const item = childrenToArray(children)[0] as React.ReactElement;
    return item.props.index;
  });

  const items = useMemo(() => {
    return React.Children.toArray(children).map((element) => {
      let item;

      if (React.isValidElement(element)) {
        item = React.cloneElement(element, {
          ...element.props,
          key: element.props.index,
          active: element.props.index === currentActive,
          onClick: () => {
            setCurrentActive(element.props.index);
          },
        });
      }

      return item;
    });
  }, [children, currentActive]);

  const activeItem = useMemo(
    () =>
      items.find(
        (element) =>
          currentActive === (element as React.ReactElement)?.props.index,
      ),
    [currentActive, items],
  ) as React.ReactElement;

  return (
    <TabContainer>
      <TabItemContainer>{items}</TabItemContainer>
      <div>{activeItem.props.children}</div>
    </TabContainer>
  );
}

Tab.Item = TabItem;

export default Tab;
