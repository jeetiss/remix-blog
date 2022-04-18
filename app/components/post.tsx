import styled from "styled-components";

const BlogPost = styled.main<{ premium?: boolean }>`
  display: grid;
  grid-template-columns: min(100%, 662px);
  justify-content: center;
  padding: 0 42px;
`;

const Article = styled.section`
  & figure {
    width: 70vw;
    display: block;
    margin: 0;
    transform: translateX(calc(331px - 35vw));
  }

  & figure img {
    width: inherit;
  }

  & {
    font-size: 21px;
    line-height: 28px;
  }
`;

type PostProps = {
  title: string;
  content: string;
};

export default function Post({ title, content }: PostProps) {
  return (
    <BlogPost>
      <h1>{title}</h1>

      <Article dangerouslySetInnerHTML={{ __html: content }} />
    </BlogPost>
  );
}
