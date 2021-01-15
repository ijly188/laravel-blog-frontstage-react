const initstate = {
	formData: {}
}

export function exampleFormState(state = initstate, action) {
	state = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case 'SUBMITFORM': {
			console.log('action', action)
			let payload = JSON.parse(JSON.stringify(action.payload))
			// 驗證傳過來的資料實際是否符合邏輯
			state.formData = payload;
			return state;
		}
		default:
			return state;
	}
}