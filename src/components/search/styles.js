import styled from "styled-components";

export const FormStyle = styled.form`
  position: relative;
  width: 100%;

  svg {
    position: absolute;
    top: 50%;
    left: 11%;
    transform: translate(100%, -50%);
    color: #fff;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 3rem;
`;

export const Input = styled.input`
  border: none;
  background: linear-gradient(35deg, #494949, #313131);
  font-size: 1.5rem;
  color: #fff;
  padding: 1rem 3rem;
  border: none;
  border-radius: 2rem;
  outline: none;
  width: 72%;
  box-shadow: 0 8px 6px -6px black;
`;
