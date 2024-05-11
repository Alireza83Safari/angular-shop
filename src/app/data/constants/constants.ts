type menuItem = Array<{ name: string; icon: string; href: string }>;

export const panelMenuItem: menuItem = [
  { name: 'dashboard', href: '/panel/dashboard', icon: 'bi bi-ui-checks-grid' },
  { name: 'product', href: '/panel/product', icon: 'bi bi-shop-window' },
  { name: 'brand', href: '/panel/brand', icon: 'bi bi-apple' },
  { name: 'category', href: '/panel/category', icon: 'bi bi-tags' },
  { name: 'user', href: '/panel/user', icon: 'bi bi-people' },
  { name: 'role', href: '/panel/role', icon: 'bi bi-universal-access-circle' },
  { name: 'order', href: '/panel/order', icon: 'bi bi-bag-check-fill' },
];
