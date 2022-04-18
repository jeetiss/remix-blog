import unified from "unified";
import html from "rehype-parse";
// @ts-ignore
import rehypeTruncate from "rehype-truncate";
import stringify from "rehype-stringify";

const uni = unified()
  .use(html)
  .use(rehypeTruncate, { maxChars: 1000, ellipses: "" })
  .use(stringify, { allowDangerousHtml: true })
  .freeze();

const truncate = async (html: string): Promise<string | Uint8Array> =>
  (await uni.process(html)).contents;

export default truncate;
