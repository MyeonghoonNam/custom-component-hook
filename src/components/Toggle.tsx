import styled from '@emotion/styled';
import useToggle from '@hooks/useToggle';
import React from 'react';

const Container = styled.label`
  display: inline-block;
  cursor: pointer;
  user-select: none;
`;

const Switch = styled.div`
  width: 64px;
  height: 30px;
  padding: 2px;
  box-sizing: border-box;
  background-color: #ccc;
  transition: background-color 0.3s ease-out;
  border-radius: 15px;

  &:after {
    content: '';
    display: block;
    position: relative;
    left: 0;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: white;
    transition: left 0.3s ease-out;
  }
`;

const CheckBox = styled.input`
  display: none;

  &:checked + div {
    background: lightgreen;
  }

  &:checked + div:after {
    left: calc(100% - 26px);
  }
`;

export interface IProps {
  name?: string;
  on?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent) => void;
}

function Toggle({ name, on, disabled, onChange, ...props }: IProps) {
  const [checked, toggle] = useToggle(on);
  const handleChange = (e: React.ChangeEvent) => {
    toggle();

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <Container {...props}>
      <CheckBox
        type="checkbox"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <Switch />
    </Container>
  );
}

export default Toggle;
