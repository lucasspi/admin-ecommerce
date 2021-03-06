export const UserRole = {
  Admin: 0,
  Editor: 1,
};

/* 
Menu Types:
"menu-default", "menu-sub-hidden", "menu-hidden"
*/
export const defaultMenuType = 'menu-default';

export const subHiddenBreakpoint = 1440;
export const menuHiddenBreakpoint = 768;
export const defaultLocale = 'pt';
export const localeOptions = [
  { id: 'en', name: 'English - LTR', direction: 'ltr' },
  { id: 'es', name: 'Español', direction: 'ltr' },
  { id: 'enrtl', name: 'English - RTL', direction: 'rtl' },
  { id: 'pt', name: 'Portuguese', direction: 'ltr' },
];

export const firebaseConfig = {
  apiKey: 'AIzaSyCWtGqfJJUsIcUFdLkAmw1cFRlbdTdKsws',
  authDomain: 'brains-spirandeli.firebaseapp.com',
  projectId: 'brains-spirandeli',
  storageBucket: 'brains-spirandeli.appspot.com',
  messagingSenderId: '519680197958',
  appId: '1:519680197958:web:9ec6f295577e840b481147',
  measurementId: 'G-ENVSBQCMDP',
};
export const currentUser = {
  id: 1,
  title: 'Sarah Kortney',
  img: '/assets/img/profiles/l-1.jpg',
  date: 'Last seen today 15:24',
  role: UserRole.Admin,
};

export const adminRoot = '/app';
export const buyUrl = 'https://1.envato.market/k4z0';
export const searchPath = `${adminRoot}/pages/miscellaneous/search`;
export const servicePath = 'https://api.coloredstrategies.com';

export const themeColorStorageKey = '__theme_selected_color';
export const isMultiColorActive = true;
export const defaultColor = 'light.blueyale';
export const isDarkSwitchActive = true;
export const defaultDirection = 'ltr';
export const themeRadiusStorageKey = '__theme_radius';
export const isAuthGuardActive = true;
export const colors = ['blueyale'];
