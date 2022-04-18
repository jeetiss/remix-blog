import type { GitHubProfile } from "remix-auth-github";
import { Link, Form, useLocation } from "@remix-run/react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  display: block;

  width: 32px;
  height: 32px;

  margin-right: 12px;

  border-radius: 16px;
`;

const SForm = styled(Form)`
  margin-left: 12px;
`;

const Profile = ({ photos, displayName }: GitHubProfile) => (
  <Container>
    {photos.length >= 1 && (
      <Avatar src={photos[0].value} alt={`${displayName}'s avatar`} />
    )}

    {displayName}

    <SForm method="post">
      <button>Log Out</button>
    </SForm>
  </Container>
);

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(auto-fill, 311px);
  justify-content: center;
  grid-gap: 20px;
`;

const LeftPart = styled.div`
  grid-column: -2 / span 1;
  align-self: center;
  justify-self: end;
`;

type NavProps = { profile?: GitHubProfile };

export default function Navigaton({ profile }: NavProps) {
  const { pathname } = useLocation();

  return (
    <Nav>
      <h1>Remix Blog</h1>

      <LeftPart>
        {profile ? (
          <Profile {...profile} />
        ) : (
          <Link to={`/login?redirectTo=${pathname}`}>login</Link>
        )}
      </LeftPart>
    </Nav>
  );
}
