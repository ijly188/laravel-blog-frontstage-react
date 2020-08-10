import React from "react";

// pages
import { IndexWrap } from "./react/layouts/IndexWrap";
import { Login } from './react/pages/Login';
import { Member } from './react/pages/Member/Member';
import { MemberDetail } from './react/pages/Member/MemberDetail';

const routes = [
  {
    path: "/",
    exact: true,
    component: IndexWrap,
    breadcrumbName: "Home"
  },
  {
    path: "/login",
    component: Login,
    breadcrumbName: "Login"
  },
  {
    path: "/member",
    component: Member,
    breadcrumbName: "Member",
    routes: [
      {
        path: "/member/detail",
        component: MemberDetail,
        breadcrumbName: "MemberDetail",
      }
    ]
  },
];

export default routes;