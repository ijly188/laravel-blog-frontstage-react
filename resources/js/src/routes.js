// pages
import IndexWrap from "./components/IndexWrap";
import Login from './components/Auth/Login';
import Register from './containers/Auth/RegisterContainer';
import Article from './containers/ArticleContainer';
import Member from './components/Member/Member';
import MemberDetail from './components/Member/MemberDetail';
import Example from './containers/ExampleContainer';
import ExampleForm from './containers/ExampleFormContainer';

const routes = [
  {
    path: "/login",
    exact: true,
    component: Login,
    breadcrumbName: "Login"
  },
  {
    path: "/register",
    exact: true,
    component: Register,
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
  {
    path: "/example-form",
    exact: true,
    component: ExampleForm,
    breadcrumbName: "ExampleForm"
  }
];

export default routes; 