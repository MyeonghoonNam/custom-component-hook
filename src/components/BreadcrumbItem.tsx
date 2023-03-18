import styled from '@emotion/styled';
import Text from './Text';
import Icon from './Icon';

export interface Props {
  children: React.ReactNode;
  href?: string;
  active?: boolean;
}

const Container = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

function BreadcrumbItem({ children, href, active, ...props }: Props) {
  return (
    <Container {...props}>
      <Anchor href={href}>
        <Text strong={active}>{children}</Text>
      </Anchor>
      {!active && <Icon name="chevron-right" size={22} strokeWidth={1} />}
    </Container>
  );
}

export default BreadcrumbItem;
