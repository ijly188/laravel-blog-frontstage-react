import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormErrorModal from '../../Common/FormErrorModal';

export default class Register extends Component {
	constructor(props) {
		super(props)
	}
	submitForm(formData) {
		this.props.submitData(formData)
	}
	render() {
		return (
			<section>
				<Formik
					// initialValues, validationSchema, onSubmit為Formik設定的變數一定要這樣命名
					initialValues={{
						email: '',
						password: '',
						password_confirmation: '',
						accountName: '',
					}}
					validationSchema={Yup.object({
						email: Yup.string()
							.email('請輸入信箱格式')
							.required('必填'),
						accountName: Yup.string()
							.required('必填'),
						password: Yup.string()
							.matches(/^(?=.*[A-Za-z])(?=.*\d)[^]{6,}$/,
								'密碼長度最少6碼且包含至少一個英文及數字')
							.required('必填'),
						password_confirmation: Yup.string()
							.oneOf([Yup.ref('password'), null], '確認密碼與上述不一致')
							.required('必填'),
					})}
					// 回傳所有表單驗證過的資訊
					onSubmit={(values, actions) => {
						// Formik有很多actions可以用, 更細的要去看Formik官方文件
						actions.resetForm();
						this.submitForm(values);
					}}
				>
					<Form>
						<div className="form-group">
							{/* <label htmlFor="exampleInputPassword1">email</label> */}
							<Field
								id="email"
								name="email"
								placeholder="輸入信箱"
								type="email"
							/>
							<ErrorMessage name="email" />
						</div>
						<div className="form-group">
							{/* <label htmlFor="exampleInputEmail1">Name</label> */}
							<Field id="password" name="password" placeholder="輸入密碼（6-8位數包含英文數字）" type="password" />
							<ErrorMessage name="password" />
						</div>
						<div className="form-group">
							{/* <label htmlFor="exampleInputEmail1">Name</label> */}
							<Field id="password_confirmation" name="password_confirmation" placeholder="請再輸入一次密碼" type="password" />
							<ErrorMessage name="password_confirmation" />
						</div>
						<div className="form-group">
							{/* <label htmlFor="exampleInputEmail1">Name</label> */}
							<Field id="accountName" name="accountName" placeholder="輸入用戶姓名" />
							<ErrorMessage name="accountName" />
						</div>
						<button type="submit" className="btn btn-primary">送出</button>
						<ErrorMessage component={FormErrorModal} />
					</Form>
				</Formik>

			</section>
		)
	}
}
