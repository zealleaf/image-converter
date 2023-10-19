import {SVGProps} from 'react';

export function SvgArrow3(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" {...props}>
      <g
        strokeWidth={10}
        stroke="hsl(227, 71%, 57%)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path
          d="M290.5 290.5Q459.5 327.5 509.5 509.5 "
          markerEnd="url(#SvgjsMarker1243)"
        />
      </g>
      <defs>
        <marker
          markerWidth={6}
          markerHeight={6}
          refX={3}
          refY={3}
          viewBox="0 0 6 6"
          orient="auto"
          id="SvgjsMarker1243">
          <polyline
            points="0,3 3,1.5 0,0"
            fill="none"
            strokeWidth={1}
            stroke="hsl(227, 71%, 57%)"
            strokeLinecap="round"
            transform="matrix(1,0,0,1,1,1.5)"
            strokeLinejoin="round"
          />
        </marker>
      </defs>
    </svg>
  );
}
