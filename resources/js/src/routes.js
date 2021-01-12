// pages
import IndexWrap from "./components/IndexWrap";
import Login from './components/Login';
import Article from './containers/ArticleContainer';
import Member from './components/Member/Member';
import MemberDetail from './components/Member/MemberDetail';
import Example from './containers/ExampleContainer';

const routes = [
  {
    path: "/login",
    exact: true,
    component: Login,
    breadcrumbName: "Login"
  },
  // member
  {
    path: "/member",
    exact: true,
    component: Member,
    breadcrumbName: "Member",
  },
  {
    path: "/member/detail",
    exact: true,
    component: MemberDetail,
    breadcrumbName: "MemberDetail",
  },
  // article
  {
    path: "/article",
    exact: true,
    component: Article,
    breadcrumbName: "Article",
  },
  {
    path: "/",
    exact: true,
    component: IndexWrap,
    breadcrumbName: "Home"
  },
  {
    path: "/example",
    exact: true,
    component: Example,
    breadcrumbName: "Example"
  },
];

export default routes; 