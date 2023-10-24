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
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read car information', 'Create bookings', 'Read booking information', 'Create reviews'],
  ownerAbilities: [
    'Manage company information',
    "Manage company's cars",
    "Manage company's bookings",
    "Manage company's team members",
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/b0819e86-f8ed-40d8-bfc3-5f6eda47fba5',
};
