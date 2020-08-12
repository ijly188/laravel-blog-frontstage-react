import React from "react";

// pages
import { IndexWrap } from "./react/layouts/IndexWrap";
import { Content } from './react/layouts/Content';
import { Login } from './react/pages/Member/Login';
import { Register } from './react/pages/Member/Register';
import { ForgetPassword } from './react/pages/Member/ForgetPassword';
import { MemberDetail } from './react/pages/Member/MemberDetail';
import { updateMemberDetail } from './react/pages/Member/updateMemberDetail';

import { ArticleList } from './react/pages/Article/ArticleList';
import { ArticleDetail } from './react/pages/Article/ArticleDetail';
import { createArticleDetail } from './react/pages/Article/createArticleDetail';
import { updateArticleDetail } from './react/pages/Article/updateArticleDetail';

const routes = [
  {
    path: "/",
    component: IndexWrap,
    breadcrumbName: "Home",
    routes: [
      {
        path: "/login",
        component: Login,
        breadcrumbName: "Login"
      },
      {
        path: "/register",
        component: Register,
        breadcrumbName: "Register",
      },
      {
        path: "/forgetpassword",
        component: ForgetPassword,
        breadcrumbName: "Forgetpassword",
      },
      {
        path: "/member-detail",
        component: MemberDetail,
        breadcrumbName: "MemberDetail",
      },
      {
        path: "/update-member",
        component: updateMemberDetail,
        breadcrumbName: "updateMemberDetail",
      },
      {
        path: "/article-list",
        component: ArticleList,
        breadcrumbName: "ArticleList",
      },
      {
        path: "/article-detail/:articleId",
        component: ArticleDetail,
        breadcrumbName: "ArticleDetail",
      },
      {
        path: "/create-article-detail",
        component: createArticleDetail,
        breadcrumbName: "createArticleDetail",
      },
      {
        path: "/update-article-detail",
        component: updateArticleDetail,
        breadcrumbName: "updateArticleDetail",
      },
      {
        path: "/",
        exact: true,
        component: Content,
        breadcrumbName: "Content",
      },
    ]
  },
];

export default routes;