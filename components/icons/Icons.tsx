import type { SVGProps } from "react";

const baseStyles = "fill-none stroke-current stroke-2";

export const CoffeeCupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 48 48"
    aria-hidden="true"
    role="img"
    {...props}
    className={props.className}
  >
    <path
      className={baseStyles}
      d="M8 12h26v12a10 10 0 0 1-10 10H18A10 10 0 0 1 8 24V12Z"
    />
    <path
      className={baseStyles}
      d="M34 16h6a4 4 0 0 1 0 8h-6"
    />
    <path className={baseStyles} d="M14 8s0-4 4-4 4 4 4 4 0-4 4-4 4 4 4 4" />
    <path className={baseStyles} d="M10 36h22" />
  </svg>
);

export const BeanIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" role="img" {...props}>
    <path
      className={baseStyles}
      d="M28 6c8 0 14 6 14 14 0 13-11 22-18 22S6 35 6 22 13 6 20 6"
    />
    <path
      className={baseStyles}
      d="M20 6c4 10 0 22-6 24"
    />
    <path
      className={baseStyles}
      d="M28 6c-4 10 0 22 6 24"
    />
  </svg>
);

export const MilkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" role="img" {...props}>
    <path
      className={baseStyles}
      d="M18 4h12l4 10v24a6 6 0 0 1-6 6h-8a6 6 0 0 1-6-6V14l4-10Z"
    />
    <path className={baseStyles} d="M18 18h12" />
    <path className={baseStyles} d="M18 24h12" />
  </svg>
);

export const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" role="img" {...props}>
    <rect
      className={baseStyles}
      x="6"
      y="8"
      width="36"
      height="32"
      rx="4"
    />
    <path className={baseStyles} d="M12 4v8" />
    <path className={baseStyles} d="M36 4v8" />
    <path className={baseStyles} d="M6 18h36" />
    <path className={baseStyles} d="m16 26 4 4 8-8" />
  </svg>
);

export const MapPinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" role="img" {...props}>
    <path
      className={baseStyles}
      d="M24 6a12 12 0 0 1 12 12c0 10-12 22-12 22S12 28 12 18A12 12 0 0 1 24 6Z"
    />
    <circle className={baseStyles} cx="24" cy="18" r="4" />
  </svg>
);

export const ClockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" role="img" {...props}>
    <circle className={baseStyles} cx="24" cy="24" r="18" />
    <path className={baseStyles} d="M24 12v12l6 4" />
  </svg>
);

export const ThumbsUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" role="img" {...props}>
    <path
      className={baseStyles}
      d="M18 20v18H8V20h10Zm0 0 6-12a4 4 0 0 1 4-2h2a4 4 0 0 1 4 4v6h6a4 4 0 0 1 3.9 4.7l-3 15A4 4 0 0 1 37 40H18"
    />
  </svg>
);

export const SteamIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" role="img" {...props}>
    <path
      className={baseStyles}
      d="M18 38c0-6 8-6 8-12s-8-6-8-12 8-6 8-12"
    />
    <path
      className={baseStyles}
      d="M30 38c0-6 8-6 8-12s-8-6-8-12 8-6 8-12"
    />
  </svg>
);
