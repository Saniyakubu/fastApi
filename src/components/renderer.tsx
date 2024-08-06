import React from "react";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm"; // For GitHub Flavored Markdown
import rehypeRaw from "rehype-raw"; // To allow raw HTML
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeBlockProps {
  inline?: boolean;
  className?: string;
  children: React.ReactNode;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  inline,
  className,
  children,
}) => {
  const language = className ? className.replace("language-", "") : "";

  if (inline) {
    return <code className={className}>{children}</code>;
  }

  return (
    <SyntaxHighlighter style={nightOwl} language={language} showLineNumbers>
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
};

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const components: Components = {
    code: ({ node, inline, className, children, ...props }: any) => {
      return (
        <CodeBlock inline={inline} className={className} {...props}>
          {children}
        </CodeBlock>
      );
    },
  };

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={components}
    >
      {content}
    </ReactMarkdown>
  );
};

// const App: React.FC = () => {
//   const markdownContent = `
// # Hello World

// Here is some code:

// \`\`\`javascript
// const hello = "Hello, World!";
// console.log(hello);
// \`\`\`
// `;

//   return (
//     <div>
//       <MarkdownRenderer content={markdownContent} />
//     </div>
//   );
// };

export default MarkdownRenderer;
