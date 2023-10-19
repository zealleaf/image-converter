import {SVGProps} from 'react';

export function SvgArrow2(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" {...props}>
      <g
        strokeWidth={10}
        stroke="hsl(335, 77%, 50%)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="rotate(283, 400, 400)">
        <path
          d="M250 250Q450 350 400 400Q294 533 550 550 "
          markerEnd="url(#SvgjsMarker1250)"
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
          id="SvgjsMarker1250">
          <polyline
            points="0,3 3,1.5 0,0"
            fill="none"
            strokeWidth={1}
            stroke="hsl(335, 77%, 50%)"
            strokeLinecap="round"
            transform="matrix(1,0,0,1,1,1.5)"
            strokeLinejoin="round"
          />
        </marker>
      </defs>
    </svg>
  );
}
