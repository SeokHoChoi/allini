declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.svg?url" {
  const url: string;
  export default url;
}

declare module "*.svg" {
  import React = require("react");

  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module "*.jpeg";
declare module "*.jpg";
declare module "*.png";
declare module "*.gif";
declare module "*.webp";
