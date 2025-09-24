interface Testimonial {
  quote: string;
  name: string;
  role?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  columns?: 2 | 3;
}

export function Testimonials({ testimonials, columns = 2 }: TestimonialsProps) {
  const gridClass = columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2";

  return (
    <div className={`grid gap-6 ${gridClass}`}>
      {testimonials.map((testimonial) => (
        <figure
          key={`${testimonial.name}-${testimonial.quote.slice(0, 10)}`}
          className="flex h-full flex-col gap-4 rounded-3xl bg-cream/80 p-6 ring-1 ring-latte/40"
        >
          <blockquote className="text-lg leading-relaxed text-espresso/90">
            “{testimonial.quote}”
          </blockquote>
          <figcaption className="text-sm font-semibold text-mocha">
            {testimonial.name}
            {testimonial.role ? (
              <span className="block text-xs font-normal text-mocha/70">
                {testimonial.role}
              </span>
            ) : null}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
