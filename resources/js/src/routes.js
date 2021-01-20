// pages
import IndexWrap from './containers/IndexWrapContainer';
import Login from './containers/Member/LoginContainer';
import Register from './containers/Member/RegisterContainer';
import RegisterSuccess from './components/FrontStage/Member/RegisterSuccess';
import Article from '././containers/Article/ArticleContainer';
import Member from './components/FrontStage/Member/Member';
import MemberDetail from './components/FrontStage/Member/MemberDetail';
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
    breadcrumbName: "Register"
  },
  {
    path: "/register-success",
    exact: true,
    component: RegisterSuccess,
    breadcrumbName: "RegisterSuccess"
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