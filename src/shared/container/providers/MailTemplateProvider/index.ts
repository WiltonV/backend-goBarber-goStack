import { container } from 'tsyringe';

import IMailTemplateProvider from './models/IMailTemplateProvider';
import HandlebarsMailThemplateProvider from './implementations/HandlebarsMailThemplateProvider';

const providers = {
  handlebars: HandlebarsMailThemplateProvider,
};

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  providers.handlebars,
);
