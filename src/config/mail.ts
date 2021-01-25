interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'wilton@rocketseat.com.br', // Email configurado no Email Addresses do AmazonSES
      name: 'Wilton da RocketSeat',
    },
  },
} as IMailConfig;
