// pages
import IndexWrap from './containers/frontStage/IndexWrapContainer';

const routes = [
  {
    path: "/",
    exact: true,
    isAuth: false,
    component: IndexWrap,
    breadcrumbName: "Home",
  },

  // 後台 router
  // {
  //   path: "/backstage",
  //   exact: true,
  //   isAuth: false,
  //   component: IndexWrap,
  //   breadcrumbName: "Home",
  // },
];

export default routes; 