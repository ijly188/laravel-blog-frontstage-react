import history from '../history';

// 共用轉導, 至於為什麼要這麼做可以看https://github.com/brickspert/blog/issues/3
// 之前試過在middleware轉導, 但畫面沒有reload還有callback問題所以把這段抽出來到action call來用就好
export const redirect = (redirectPath) => {
	history.push(redirectPath);
	history.go();
}