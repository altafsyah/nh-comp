import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  id: string;
}

export default function Icon({
  id,
  width = 32,
  height = 32,
  ...props
}: IconProps) {
  return (
    <svg {...props} width={width} height={height}>
      <use href={`/assets/sprite.svg#${id}`} />
    </svg>
  );
}
