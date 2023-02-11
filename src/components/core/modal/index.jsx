import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) =>
        props.primary
            ? "#0d6efd"
            : props.secondary
                ? "#6c757d"
                : props.danger
                    ? "#dc3545"
                    : "black"};

  color: white;
  padding: 0.5rem;
  border-radius: 5px;
  border: 0;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #ced4da;
  padding: ${(props) => props.size};
  margin: ${(props) => props.size};
`;


export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #1a88e3;
  padding: 20px;
`;

export const ListGroup = styled.div`
  border: 1px solid;
  margin-bottom: 1rem;
`;

export const Div = styled.div`
  margin: ${(props) => props.size};
`;