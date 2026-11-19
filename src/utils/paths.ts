const base = import.meta.env.BASE_URL;

export function withBase(path = '/') {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(path)) return path;
  if (path === '/') return base;
  return `${base}${path.replace(/^\/+/, '')}`;
}

export function withoutBase(path: string) {
  if (base === '/' || !path.startsWith(base)) return path;
  return '/' + path.slice(base.length);
}
