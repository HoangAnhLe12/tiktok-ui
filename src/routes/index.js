//Layout
import { HeaderOnly } from '~/layouts';

import config from '~/config';
//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
import Live from '~/pages/Live';

//Public Routes
const publicRoutes = [
   {
      path: config.routes.home,
      component: Home,
   },
   {
      path: config.routes.explore,
      component: Following,
   },
   {
      path: config.routes.following,
      component: Following,
   },
   {
      path: config.routes.upload,
      component: Upload,
      layout: HeaderOnly,
   },
   {
      path: config.routes.profile,
      component: Profile,
   },
   {
      path: config.routes.search,
      component: Search,
      layout: null,
   },
   {
      path: config.routes.live,
      component: Live,
   },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
