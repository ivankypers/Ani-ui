'use client'

import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/tokyo-night-dark.min.css';
import dedent from "dedent";

interface CodeBlockProps {
    language: string;
    value: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, value }) => {
    const codeEl = useRef<HTMLElement>(null);

    const formattedValue = dedent`${value}`;

    useEffect(() => {
        if (codeEl.current) {
            hljs.highlightElement(codeEl.current);
        }
    }, []);

    return (
        <pre>
            <code ref={codeEl} className={`language-${language} code-wrapper`}>
                {formattedValue}
            </code>
        </pre>
    );
}

export default CodeBlock;