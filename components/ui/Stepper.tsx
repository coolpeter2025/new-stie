interface Step {
  title: string;
  description: string;
}

interface StepperProps {
  steps: Step[];
}

export function Stepper({ steps }: StepperProps) {
  return (
    <ol className="relative grid gap-8 md:grid-cols-3">
      {steps.map((step, index) => (
        <li key={step.title} className="rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-latte/40">
          <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/30 font-heading text-lg text-espresso">
            {index + 1}
          </span>
          <h3 className="font-heading text-xl text-espresso">{step.title}</h3>
          <p className="mt-2 text-base text-mocha/80">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
