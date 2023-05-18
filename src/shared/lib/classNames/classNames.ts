type Mods = Record<string, boolean | string> // в качестве ключа стринг, в качестве значения либо булин либо стринг

export function classNames(className: string, mod: Mods, additional: string[]): string {
  return [
    className,
    ...additional,
    ...Object.entries(mod).filter(([classname, value]) => Boolean(value)).map(([classname]) => classname),
  ].join(' ')
}