import styled from "styled-components";

const AppContainer = styled.div`
  position: relative;
  background-color: var(--bg-color);
  margin: 0 auto;
  text-align: center;
  min-height: 450px;
  overflow: hidden;
  @media (min-width: 610px) {
    width: 600px;
    margin-top: 20px;
    margin-bottom: 100px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
  }
`;

export default AppContainer;
