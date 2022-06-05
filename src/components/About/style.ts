import styled from "styled-components";

export const AboutDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    margin: 30px;
  }
  img {
    width: 50%;
    object-fit: contain;
    border-radius: 100%;
    border: 10px solid rgb(255, 130, 92);
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;
