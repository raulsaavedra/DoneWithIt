import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { User } from './schemas/User';
import { Product } from './schemas/Product';
import { ProductImage } from './schemas/ProductImage';
import { UserImage } from './schemas/UserImage';
import {createAuth} from '@keystone-next/auth';
import {withItemData, statelessSessions} from '@keystone-next/keystone/session'
import { insertSeedData } from './seed-data';
const databaseURL = `${process.env.DATABASE_URL}`;

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: `${process.env.COOKIE_SECRET}`,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password']
  }
  // TODO: Add initial roles in here
})
export default withAuth(config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    
  },
  lists: createSchema({
    User,
    UserImage,
    Product,
    ProductImage,
  }),
  ui: {
    //  Show the UI only for people who pass this text 
    isAccessAllowed: ({session}) => {
      return session?.data;
    },
  },
  session: withItemData(statelessSessions(sessionConfig), {
    User: 'id'
  })
}));
