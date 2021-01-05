// pages
import IndexWrap from "./components/IndexWrap";
// import Login from './components/Login';
import Login from './containers/LoginContainer';
import Member from './components/Member/Member';
import MemberDetail from './components/Member/MemberDetail';

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