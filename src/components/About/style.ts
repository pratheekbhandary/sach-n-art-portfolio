import styled from "styled-components";

export const AboutDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  > * {
    margin: 30px;
  }
  img {
    display: inline-block;
    width: 25%;
    object-fit: contain;
    border-radius: 100%;
    border: 10px solid rgb(255, 130, 92);
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    img {
      width: 75%;
    }
    > * {
      margin: 10px;
    }
  }
`;
