interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read restaurant information',
    'Read menus',
    'Create reservations',
    'Read personal user information',
  ],
  ownerAbilities: ['Manage restaurant information', 'Manage menus', 'Manage reservations', 'Manage employees'],
  getQuoteUrl: 'https://app.roq.ai/proposal/e6b7c85b-bdb7-4c0e-8793-5e154cd385eb',
};
