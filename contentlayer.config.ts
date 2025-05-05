import { defineDocumentType, makeSource } from "contentlayer2/source-files";

// Import the syntax highlighter and its types
import rehypePrettyCode from "rehype-pretty-code";
import type { Options as PrettyCodeOptions } from "rehype-pretty-code";

// Import the heading plugins
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import type { Options as AutolinkOptions } from "rehype-autolink-headings"; // Optional: if you want typed options

// Define options for rehype-pretty-code
const prettyCodeOptions: Partial<PrettyCodeOptions> = {
  theme: "rose-pine",
  // ... other pretty code options
};

// Optional: Define options for rehype-autolink-headings
const autolinkOptions: Partial<AutolinkOptions> = {
  properties: {
    className: ["anchor-link"], // Add a class for styling the link
    ariaLabel: "Link to section", // Accessibility
    // Example: Use a '#' symbol as the link content
    // content: { type: 'text', value: '#' }
    // Example: Prepend the link instead of appending (default is prepend)
    // behavior: 'prepend'
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    description: { type: "string", required: true },
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: {
      type: "list",
      of: { type: "string" }, // Defines that the list contains strings
      required: false, // Make tags optional (or true if every post MUST have tags)
      default: [], // Optional: Provide a default empty array if no tags are specified
    },
    readtime: { type: "number", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [
      // Add any remark plugins here
    ],
    rehypePlugins: [
      // 1. Add IDs to headings (h1, h2, etc.)
      rehypeSlug,

      // 2. Add links back to the heading ID (must be after rehypeSlug)
      [rehypeAutolinkHeadings, autolinkOptions], // Use options here if defined

      // 3. Apply syntax highlighting
      [rehypePrettyCode, prettyCodeOptions],

      // Add other rehype plugins here if needed
    ],
  },
});
