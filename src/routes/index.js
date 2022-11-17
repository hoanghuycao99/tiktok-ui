import config from '~/config';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import HeaderOnlyLayout from '~/layouts/HeaderOnly';
import Search from '~/pages/Search';
import ProfileLayout from '~/layouts/ProfileLayout/ProfileLayout';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },

    {
        path: config.routes.following,
        component: Following,
    },

    {
        path: config.routes.profile,
        component: Profile,
        layout: ProfileLayout,
    },

    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnlyLayout,
    },

    {
        path: config.routes.search,
        component: Search,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
