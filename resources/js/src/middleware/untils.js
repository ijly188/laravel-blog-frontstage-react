const { token } = localStorage;

// 錯誤攔截方法
export const tip = (data, errorMsg) => {
    // console.log(token, data, errorMsg);

    // context.commit('SETUSERTOKEN', '');
    localStorage.removeItem('token');
                
    // // 新增用顯示狀態處理
    // context.dispatch('updateMessage', { message: '已登出', status: 'danger' });
};