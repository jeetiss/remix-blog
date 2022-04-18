import styled from "styled-components";

const Grid = styled.ul`
  display: grid;
  margin: 0;
  padding: 0;
  list-style-type: none;
  grid-template-columns: repeat(auto-fill, 311px);
  justify-content: center;
  grid-gap: 20px;
`;

export default Grid;
