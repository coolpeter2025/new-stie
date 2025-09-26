interface MenuItem {
  title: string;
  items: string[];
}

interface MenuGridProps {
  items: MenuItem[];
}

export function MenuGrid({ items }: MenuGridProps) {
  const isSingle = items.length === 1;
  return (
    <div className={`grid gap-6 ${isSingle ? "md:grid-cols-1" : "md:grid-cols-3"}`}>
      {items.map((item) => (
        <div
          key={item.title}
          className={
            isSingle
              ? "relative overflow-hidden rounded-4xl bg-gradient-to-br from-teal to-coffee p-8 text-cream shadow-xl ring-1 ring-teal/20"
              : "rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-latte/40"
          }
        >
          <h3 className={`font-heading ${isSingle ? "text-2xl text-cream drop-shadow-sm" : "text-xl text-espresso"}`}>
            {item.title}
          </h3>
          {isSingle ? (
            <ul className="mt-5 grid gap-2 text-base text-cream/90 sm:grid-cols-2">
              {item.items.map((menuItem) => (
                <li key={menuItem} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cream/90" aria-hidden />
                  <span>{menuItem}</span>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="mt-3 space-y-2 text-base text-mocha/80">
              {item.items.map((menuItem) => (
                <li key={menuItem} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-teal" aria-hidden />
                  <span>{menuItem}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
