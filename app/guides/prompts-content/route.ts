import { readFileSync } from "fs";
import { join } from "path";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const lang = searchParams.get("lang") || "ko";

  try {
    const fileName =
      lang === "en" ? "README_PROMPTS.en.md" : "README_PROMPTS.md";
    const filePath = join(process.cwd(), fileName);
    const content = readFileSync(filePath, "utf-8");

    // Convert Markdown to HTML with styling
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              font-family: system-ui, -apple-system, sans-serif;
              background: #0d1117;
              color: #e6edf3;
              padding: 2rem;
              line-height: 1.7;
              max-width: 900px;
              margin: 0 auto;
            }
            h1 {
              font-size: 2.5rem;
              font-weight: bold;
              margin-bottom: 1rem;
              color: #a371f7;
              border-bottom: 2px solid #30363d;
              padding-bottom: 0.5rem;
            }
            h2 {
              font-size: 2rem;
              font-weight: bold;
              margin-top: 2rem;
              margin-bottom: 1rem;
              color: #bc8cff;
            }
            h3 {
              font-size: 1.5rem;
              font-weight: bold;
              margin-top: 1.5rem;
              margin-bottom: 0.75rem;
              color: #d2a8ff;
            }
            p {
              margin-bottom: 1rem;
              color: #c9d1d9;
            }
            ul, ol {
              margin-bottom: 1rem;
              padding-left: 2rem;
            }
            li {
              margin-bottom: 0.5rem;
              color: #c9d1d9;
            }
            code {
              background: #161b22;
              border: 1px solid #30363d;
              padding: 0.2rem 0.4rem;
              border-radius: 4px;
              font-family: 'Courier New', monospace;
              color: #bc8cff;
            }
            pre {
              background: #161b22;
              border: 1px solid #30363d;
              padding: 1rem;
              border-radius: 8px;
              overflow-x: auto;
              margin-bottom: 1rem;
            }
            pre code {
              background: transparent;
              border: none;
              padding: 0;
              color: #c9d1d9;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 1rem;
              background: #161b22;
              border: 1px solid #30363d;
              border-radius: 8px;
              overflow: hidden;
            }
            th {
              background: #21262d;
              padding: 0.75rem;
              text-align: left;
              font-weight: bold;
              color: #a371f7;
              border-bottom: 2px solid #30363d;
            }
            td {
              padding: 0.75rem;
              border-bottom: 1px solid #30363d;
              color: #c9d1d9;
            }
            tr:last-child td {
              border-bottom: none;
            }
            blockquote {
              border-left: 4px solid #a371f7;
              padding-left: 1rem;
              margin: 1rem 0;
              color: #8b949e;
              font-style: italic;
            }
            strong {
              color: #f0f6fc;
              font-weight: 600;
            }
            a {
              color: #a371f7;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
            hr {
              border: none;
              border-top: 1px solid #30363d;
              margin: 2rem 0;
            }
          </style>
        </head>
        <body>
          ${content
            .split("\n")
            .map((line) => {
              // Headers
              if (line.startsWith("# ")) {
                return `<h1>${line.substring(2)}</h1>`;
              }
              if (line.startsWith("## ")) {
                return `<h2>${line.substring(3)}</h2>`;
              }
              if (line.startsWith("### ")) {
                return `<h3>${line.substring(4)}</h3>`;
              }
              // Horizontal rule
              if (line.trim() === "---") {
                return "<hr />";
              }
              // List items
              if (line.match(/^[\s]*[\*\-]\s/)) {
                const indent = line.search(/[\*\-]/);
                const content = line.replace(/^[\s]*[\*\-]\s/, "");
                return `<li style="margin-left: ${
                  indent * 20
                }px">${content}</li>`;
              }
              // Code blocks
              if (line.startsWith("```")) {
                return line.includes("```") && line.length > 3
                  ? "</pre>"
                  : "<pre><code>";
              }
              // Regular paragraphs
              if (line.trim()) {
                // Bold
                let formatted = line.replace(
                  /\*\*(.*?)\*\*/g,
                  "<strong>$1</strong>"
                );
                // Inline code
                formatted = formatted.replace(/`([^`]+)`/g, "<code>$1</code>");
                return `<p>${formatted}</p>`;
              }
              return "";
            })
            .join("\n")}
        </body>
      </html>
    `;

    return new Response(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    });
  } catch (error) {
    console.error("Error reading file:", error);
    return new Response("File not found", { status: 404 });
  }
}
