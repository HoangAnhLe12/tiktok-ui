//Layout
import { HeaderOnly } from '~/components/Layout';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';

//Public Routes
const publicRoutes = [
   {
      path: '/',
      component: Home,
   },
   {
      path: '/following',
      component: Following,
   },
   {
      path: '/upload',
      component: Upload,
      layout: HeaderOnly,
   },
   {
      path: '/:nickname',
      component: Profile,
   },
   {
      path: '/search',
      component: Search,
      layout: null,
   },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
