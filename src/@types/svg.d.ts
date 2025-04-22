declare module '*.svg' {
  import { FunctionComponent, SVGAttributes } from 'react';
  export default FunctionComponent<SVGAttributes<SVGElement>>;
}

declare module '*.md' {
  const value: string;
  export default value;
}
