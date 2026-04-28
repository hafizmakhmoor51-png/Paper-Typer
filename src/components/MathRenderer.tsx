import katex from 'katex';
import 'katex/dist/katex.min.css';
import { useEffect, useRef } from 'react';

interface MathRendererProps {
  content: string;
  displayMode?: boolean;
  className?: string;
}

export default function MathRenderer({ content, displayMode = false, className = '' }: MathRendererProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Basic regex to find $...$ and replace with rendered math
      // For this app, we'll assume the content might have multiple math blocks or just be one
      const mathRegex = /\$(.*?)\$/g;
      
      if (content.includes('$')) {
        let lastIndex = 0;
        let match;
        const parts = [];

        while ((match = mathRegex.exec(content)) !== null) {
          // Text before match
          parts.push(content.substring(lastIndex, match.index));
          
          try {
            const rendered = katex.renderToString(match[1], {
              throwOnError: false,
              displayMode: false
            });
            parts.push(rendered);
          } catch (e) {
            parts.push(match[0]);
          }
          
          lastIndex = mathRegex.lastIndex;
        }
        
        parts.push(content.substring(lastIndex));
        containerRef.current.innerHTML = parts.join('');
      } else {
        try {
          containerRef.current.innerHTML = katex.renderToString(content, {
            throwOnError: false,
            displayMode
          });
        } catch (e) {
          containerRef.current.textContent = content;
        }
      }
    }
  }, [content, displayMode]);

  return <span ref={containerRef} className={className} />;
}
