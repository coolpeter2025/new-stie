interface MenuItem {
  title: string;
  items: string[];
}

interface MenuGridProps {
  items: MenuItem[];
}

export function MenuGrid({ items }: MenuGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-latte/40">
          <h3 className="font-heading text-xl text-espresso">{item.title}</h3>
          <ul className="mt-3 space-y-2 text-base text-mocha/80">
            {item.items.map((menuItem) => (
              <li key={menuItem} className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-teal" aria-hidden />
                <span>{menuItem}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
