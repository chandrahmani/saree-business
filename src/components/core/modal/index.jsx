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