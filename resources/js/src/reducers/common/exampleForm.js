const initState = {
	formData: {}
}

export function exampleFormState(state = initState, action) {
	state = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case 'SUBMIT_FORM': {
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