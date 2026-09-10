import { useMemo, useState } from 'react';
import hljs from 'highlight.js/lib/core';
import java from 'highlight.js/lib/languages/java';
import 'highlight.js/styles/atom-one-dark.css';

hljs.registerLanguage('java', java);
function SourceCode({ code }: { code: string }) {
  const highlighted = useMemo(() => hljs.highlight(code, { language: 'java' }).value, [code]);
  return (
    <pre className="source-code" tabIndex={0} aria-label="Java source code">
      <code dangerouslySetInnerHTML={{ __html: highlighted }} />
    </pre>
  );
}

export default function FileTreeItem({
  fileName,
  codeSnippet,
}: {
  fileName: string;
  codeSnippet?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <details className="source-file" onToggle={(event) => setOpen(event.currentTarget.open)}>
      <summary>
        <span className="mono">{fileName}</span>
        <span aria-hidden="true">+</span>
      </summary>
      {open && <SourceCode code={codeSnippet ?? ''} />}
    </details>
  );
}
