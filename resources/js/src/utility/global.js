import history from '../history';

// 之前試過在middleware轉導, 但畫面沒有reload還有callback問題所以把這段抽出來到action call來用就好
// 相關參考文獻 https://reactrouter.com/web/api/history, https://github.com/ReactTraining/history/tree/master/docs
export const redirect = (redirectPath) => {
	history.push(redirectPath);
	history.go();
}