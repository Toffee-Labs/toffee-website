import styled from 'styled-components';

import colors from 'styles/colors';
import {d2, h2} from 'styles/fonts';

export const Container = styled.div`
  width: 100%;
  position: relative;
  background-color: ${colors.primary};
`;

export const Wrapper = styled.div`
  width: 85%;
  margin: auto;
  padding-top: 5em;
  padding-bottom: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.span`
  ${d2.bold}
  color: ${colors.white};
  text-align: center;
  text-transform: uppercase;
`;

export const Tint = styled.span`
  color: ${colors.secondary};
`;

export const InputGroup = styled.div`
  margin-top: 3.5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  width: 50%;
  height: 3.5em;
  padding: 0 1em 0 1em;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  color: ${colors.white};
  border: none;
  margin-right: 1em;
  ${h2.regular}

  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: 2px solid ${colors.secondary};
  }

  @media (max-width: 480px) {
    width: 88%;
    margin-right: 0 !important;
    margin-bottom: 1em;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 3.5em;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: ${colors.secondary};
  ${h2.medium}
  color: ${colors.white};

  &:hover {
    background-color: ${colors.secondaryDark};
    transition: background-color 0.15s ease-in-out;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 2.75em;
  }
`;

export const RoundedBottom = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 200px;
  margin-top: -79px;

  &:before {
    border-radius: 100%;
    position: absolute;
    background-color: ${colors.primary};
    right: -200px;
    left: -200px;
    top: -200px;
    bottom: 0;
    content: '';
    z-index: 1;
  }
`;
