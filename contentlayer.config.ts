import { defineDocumentType, makeSource } from "contentlayer2/source-files";
// Remove the old highlight import:
// import highlight from "rehype-highlight";

// Import the new syntax highlighter and its types
import rehypePrettyCode from "rehype-pretty-code";
import type { Options as PrettyCodeOptions } from "rehype-pretty-code";

// Define options for rehype-pretty-code
// See: https://rehype-pretty-code.netlify.app/
const prettyCodeOptions: Partial<PrettyCodeOptions> = {
  // Use the theme you want. Check Shiki's themes for options:
  // https://shiki.style/themes
  theme: "github-dark",
  // Keep the background or use a custom background color? Default is false
  // keepBackground: false,

  // Optional: Callback function to customize lines
  // onVisitLine(node: any) {
  //   // Prevent lines from collapsing in `display: grid` mode, and allow empty
  //   // lines to be copy/pasted
  //   if (node.children.length === 0) {
  //     node.children = [{ type: 'text', value: ' ' }];
  //   }
  // },
  // Optional: Callback function to customize highlighted lines
  // onVisitHighlightedLine(node: any) {
  //   node.properties.className.push('line--highlighted');
  // },
  // Optional: Callback function to customize highlighted characters
  // onVisitHighlightedChars(node: any) {
  //   node.properties.className = ['word--highlighted'];
  // },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  // Be careful with `**/*.mdx` if your contentDirPath is 'posts'
  // This will match ANY .mdx file inside 'posts' and its subdirectories.
  // If you only want .mdx files directly in 'posts', use `*.mdx`
  // If you want them in subdirectories like 'posts/topic/file.mdx',
  // keep `**/*.mdx`.
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      // This assumes all posts are directly under 'posts'.
      // If you have 'posts/topic/slug.mdx', flattenedPath will be 'topic/slug'.
      // The resulting URL will be '/blog/topic/slug'. Adjust if needed.
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    // Remove the old highlight plugin
    // rehypePlugins: [highlight],

    // Add rehype-pretty-code with its options
    rehypePlugins: [
      // You can add other rehype plugins here if needed, before or after pretty-code
      [rehypePrettyCode, prettyCodeOptions],
    ],
    // You can also add remark plugins here if needed:
    // remarkPlugins: [],
  },
});
