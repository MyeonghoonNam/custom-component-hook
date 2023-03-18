import styled from '@emotion/styled';
import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';

const Container = styled.div`
  display: inline-block;
`;

export interface Props {
  children: React.ReactNode;
}

function Breadcrumb({ children, ...props }: Props) {
  const items = React.Children.toArray(children).map(
    (element, index, elements) => {
      let item;

      if (React.isValidElement(element)) {
        item = React.cloneElement(element, {
          ...element.props,
          active: index === elements.length - 1,
        });
      }

      return item;
    },
  );

  return <Container {...props}>{items}</Container>;
}

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
