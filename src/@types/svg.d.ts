declare module '*.svg' {
  import { FunctionComponent, SVGAttributes } from 'react';
  export default FunctionComponent<SVGAttributes<SVGElement>>;
}

declare module "*.md" {
  const value: string; // Treats the import as a path/URL string by default
  export default value;
}
