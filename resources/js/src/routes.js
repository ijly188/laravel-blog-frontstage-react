// pages
import IndexWrap from "./components/layouts/IndexWrap";
import Login from './components/pages/Login';
import Member from './components/pages/Member/Member';
import MemberDetail from './components/pages/Member/MemberDetail';

const routes = [
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
  {
    path: "/",
    exact: true,
    component: IndexWrap,
    breadcrumbName: "Home"
  },
];

export default routes; 