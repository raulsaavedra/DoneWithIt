import { list } from '@keystone-next/keystone/schema';
import { text, password, relationship, integer } from '@keystone-next/fields';

export const Product = list({
  // access:
  // ui:
  fields: {
    name: text({ isRequired: true }),
    price: integer({isRequired: true}),
    owner: relationship({ref: 'User.products'}),
    photo: relationship({ref: 'ProductImage.product'})
  },
});

