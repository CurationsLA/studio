import * as React from 'react';

const CurationCraftLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="150" height="30" viewBox="0 0 150 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <text
      className="font-headline"
      x="0"
      y="22"
      fontFamily="'Space Grotesk', sans-serif"
      fontSize="24"
      fontWeight="bold"
      fill="hsl(var(--primary))"
    >
      CURATIONS
    </text>
  </svg>
);

export default CurationCraftLogo;
