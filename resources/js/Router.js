import React from "react";

// pages
import IndexWrap from "./react/ui/layouts/IndexWrap";
import Content from './react/ui/layouts/Content';

import Login from './react/ui/pages/Member/Login';

const routes = [
  {
    path: "/",
    component: IndexWrap,
    breadcrumbName: "Home",
    routers: [
      {
        path: "/login",
        exact: true,
        component: Login,
        breadcrumbName: "Login",
      },
      {
        path: "/",
        exact: true,
        component: Content,
        breadcrumbName: "Content",
      },
    ],
  }
];

export default routes;