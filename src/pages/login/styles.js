import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  color: black;
  width: 25%;
  height: 35rem;
  border-radius: 1rem;
  margin: 3.5rem;
`;
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    color: black;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  margin: 2rem 0rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: right;
  min-width: 330px;
  margin-top: 2rem;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid rgb(113, 113, 113);
  min-width: 320px;
  padding: 10px 10px;
  margin: 16px 0px;
`;

export const RememberContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.div`
  font-size: 1.7rem;
  padding: 0;
  margin-right: 10px;
  margin-top: -3px;
`;

export const Button = styled.button`
  border-radius: 2rem;
  background: linear-gradient(to right, rgba(144, 206, 161, 1) 0%, rgba(1, 180, 228, 1) 100%);
  color: white;
  border: none;
  padding: 1rem 0;
  font-size: 1rem;
  font-weight: bold;
  width: 50%;
  margin: 0 auto;
  margin-top: 2rem;

  &:hover {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    background-color: rgba(0, 0, 0, 0.9);
  }
`;
