import IMailTemplateProvider from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse(): Promise<string> {
    // Esse fake não está servindo para nada. Somente retorna uma string fixa.
    return 'Mail content';
  }
}

export default FakeMailTemplateProvider;
