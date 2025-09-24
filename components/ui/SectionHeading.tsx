import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center" | "right";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <div className={`flex flex-col gap-3 ${alignment[align]}`}>
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full bg-gold/20 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-mocha">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-espresso sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-base text-mocha/80 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
