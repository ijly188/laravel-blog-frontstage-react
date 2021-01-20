import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormErrorModal from '../../Common/FormErrorModal';

export default class Login extends Component {
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
				}}
				validationSchema={Yup.object({
					email: Yup.string()
						.email('請輸入信箱格式')
						.required('必填'),
					password: Yup.string()
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
							placeholder="信箱"
							type="email"
						/>
						<ErrorMessage name="email" />
					</div>
					<div className="form-group">
						{/* <label htmlFor="exampleInputEmail1">Name</label> */}
						<Field id="password" name="password" placeholder="密碼" type="password" />
						<ErrorMessage name="password" />
					</div>
					<div>
						<a href="#">忘記密碼?</a>
					</div>
					<button type="submit" className="btn btn-primary">登入</button>
					<ErrorMessage component={FormErrorModal} />
				</Form>
			</Formik>

		</section>
		)
	}
}