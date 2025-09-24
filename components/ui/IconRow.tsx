import { ReactNode } from "react";

interface IconRowItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface IconRowProps {
  items: IconRowItem[];
}

export function IconRow({ items }: IconRowProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-3 rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-latte/40"
        >
          <div className="h-12 w-12 text-teal">{item.icon}</div>
          <h3 className="font-heading text-xl text-espresso">{item.title}</h3>
          <p className="text-base text-mocha/80">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
