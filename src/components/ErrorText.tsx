import Text from './Text';

export interface IProps {
  children?: React.ReactNode;
}

function ErrorText({ children, ...props }: IProps) {
  return (
    <Text size="12px" color="red" {...props}>
      {children}
    </Text>
  );
}

export default ErrorText;
