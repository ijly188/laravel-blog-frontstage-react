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

import Electronics from './components/Other/Electronics';
import Mobile from './components/Other/Mobile';
import Desktop from './components/Other/Desktop';
import Laptop from './components/Other/Laptop';

const routes = [
  {
    path: "/login",
    exact: true,
    isAuth: false,
    component: Login,
    breadcrumbName: "Login"
  },
  {
    path: "/register",
    exact: true,
    isAuth: false,
    component: Register,
    breadcrumbName: "Register"
  },
  {
    path: "/register-success",
    exact: true,
    isAuth: false,
    component: RegisterSuccess,
    breadcrumbName: "RegisterSuccess"
  },
  // member
  {
    path: "/member",
    exact: true,
    isAuth: true,
    component: Member,
    breadcrumbName: "Member",
  },
  {
    path: "/member/detail",
    exact: true,
    isAuth: true,
    component: MemberDetail,
    breadcrumbName: "MemberDetail",
  },
  // article
  {
    path: "/article",
    exact: true,
    isAuth: false,
    component: Article,
    breadcrumbName: "Article",
  },
  {
    path: "/",
    exact: true,
    isAuth: false,
    component: IndexWrap,
    breadcrumbName: "Home",
  },
  {
    path: '/electronics',
    exact: true,
    isAuth: true,
    component: Electronics,
    breadcrumbName: 'Electronics'
  },
  {
    path: '/electronics/mobile',
    exact: true,
    isAuth: false,
    component: Mobile,
    breadcrumbName: 'Mobile Phone'
  },
  {
    path: '/electronics/laptop',
    exact: true,
    isAuth: false,
    component: Laptop,
    breadcrumbName: 'Laptop'
  },
  {
    path: '/electronics/desktop',
    exact: true,
    isAuth: false,
    component: Desktop,
    breadcrumbName: 'Desktop PC'
  },
  {
    path: "/example",
    exact: true,
    isAuth: false,
    component: Example,
    breadcrumbName: "Example"
  },
  {
    path: "/example-form",
    exact: true,
    isAuth: false,
    component: ExampleForm,
    breadcrumbName: "ExampleForm"
  }
];

export default routes; 