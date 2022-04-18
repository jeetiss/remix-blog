import styled from "styled-components";
import { Link as InnerLink } from "@remix-run/react";

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  display: flex;

  grid-column: 1 / -1;
  justify-content: center;
`;

const Link = styled(InnerLink)`
  display: block;
  box-sizing: border-box;
  text-decoration: none;
  padding: 14px 20px;
  margin: 8px;
  border: 1px solid #0f141e;
  border-radius: 20px;
`;

const Pagination = ({ hardcodedAmount = 6 }) => {
  return (
    <List>
      {Array.from({ length: hardcodedAmount }, (_, i) => i + 1).map((key) => (
        <li key={key}>
          <Link to={`?page=${key}`}>{key}</Link>
        </li>
      ))}
    </List>
  );
};

export default Pagination;
