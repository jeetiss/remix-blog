import styled from "styled-components";

const BlogPost = styled.main`
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

  height: 70vh;
  overflow: hidden;
`;

const Gradinent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  height: 70vh;

  transform: translateY(calc(-100% - 1px));

  background-image: linear-gradient(
    to bottom,
    hsla(0, 0%, 100%, 0) 0%,
    hsla(0, 0%, 100%, 0.013) 8.1%,
    hsla(0, 0%, 100%, 0.049) 15.5%,
    hsla(0, 0%, 100%, 0.104) 22.5%,
    hsla(0, 0%, 100%, 0.175) 29%,
    hsla(0, 0%, 100%, 0.259) 35.3%,
    hsla(0, 0%, 100%, 0.352) 41.2%,
    hsla(0, 0%, 100%, 0.45) 47.1%,
    hsla(0, 0%, 100%, 0.55) 52.9%,
    hsla(0, 0%, 100%, 0.648) 58.8%,
    hsla(0, 0%, 100%, 0.741) 64.7%,
    hsla(0, 0%, 100%, 0.825) 71%,
    hsla(0, 0%, 100%, 0.896) 77.5%,
    hsla(0, 0%, 100%, 0.951) 84.5%,
    hsla(0, 0%, 100%, 0.987) 91.9%,
    hsl(0, 0%, 100%) 100%
  );
`;

const PaywallCantainer = styled.div`
  height: 333px;
  position: relative;

  background: #ffffff;
  border: 1px solid #0f141e;
  box-sizing: border-box;
  border-radius: 20px;

  padding: 32px 45px;
  margin-bottom: 30px;

  & h2 {
    font-size: 47px;
    line-height: 48px;
    margin: 0;
    padding: 0 0 20px;
  }

  & p {
    font-size: 24px;
    line-height: 28px;
  }
`;

type PostProps = {
  title: string;
  content: string;
};

export default function PremiumPost({ title, content }: PostProps) {
  return (
    <BlogPost>
      <span>Premium</span>
      <h1>{title}</h1>

      <Article dangerouslySetInnerHTML={{ __html: content }} />

      <PaywallCantainer>
        <Gradinent />
        <h2>Full story is available by subscription</h2>
        <p>
          A subscription gives access to all of the career articles, videos and
          audiopodcasts
        </p>
      </PaywallCantainer>
    </BlogPost>
  );
}
