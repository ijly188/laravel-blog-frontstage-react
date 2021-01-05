import React from 'react';

const Login = (props) => {
  console.log(props)
  return (
    <section>
      <h3>文章列表</h3>
      <button onClick={props.getArticalList}>取得文章列表</button>
      data: {props.data}
    </section>
  );
}
// const Login = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     fetchRequestQuery(dispatch);
//   }, []);

//   const { request } = useSelector(state => state);
//   return (
//     <span>{JSON.stringify(request)}</span>
//   );
// };

export default Login;