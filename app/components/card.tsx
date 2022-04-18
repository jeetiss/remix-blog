import styled from "styled-components";
import { Link } from "@remix-run/react";

const Body = styled.li`
  position: relative;
  border: 1px solid #0f141e;
  border-radius: 20px;
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  height: 233px;
  width: 100%;
  object-fit: cover;
`;

const Title = styled.div`
  padding: 5px 20px 42px;

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #0f141e;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Delux = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;

  background-color: white;
  padding: 8px 12px;

  border: 1px solid #d9deeb;
  border-radius: 100px;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;

  color: #0f141e;
`;

interface CardProps {
  id: number;
  title: string;
  premium?: boolean;
  featured_image_url: string;
  featured_image_alt: string;
}

export default function Card({
  id,
  title,
  premium,
  featured_image_url,
  featured_image_alt,
}: CardProps) {
  return (
    <Body>
      <StyledLink to={`${id}`}>
        <Image src={featured_image_url} alt={featured_image_alt} />

        <Title>{title}</Title>

        {premium && <Delux>Premium</Delux>}
      </StyledLink>
    </Body>
  );
}
