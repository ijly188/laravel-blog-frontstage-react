import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormErrorModal from './Common/FormErrorModal';

export default class ExampleForm extends Component {
	constructor(props) {
		super(props);
	}
	submitForm (formData) {
		this.props.submitData(formData)
	}
	render() {
		return (
			<section>
				<Formik
					// initialValues, validationSchema, onSubmit為Formik設定的變數一定要這樣命名
					initialValues={{
						name: '',
						email: '',
					}}
					validationSchema={Yup.object({
						name: Yup.string()
							.max(5, 'Must be 5 characters or less')
							.required('必填'),
						email: Yup.string()
							.email('Invalid email address')
							.required('必填')
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
							<label htmlFor="exampleInputEmail1">Name</label>
							<Field id="name" name="name" placeholder="Jane" />
							<ErrorMessage name="name" />
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">email</label>
							<Field
								id="email"
								name="email"
								placeholder="jane@acme.com"
								type="email"
							/>
							<ErrorMessage name="email" />
						</div>
						<div className="form-group form-check">
							<input type="checkbox" className="form-check-input" id="exampleCheck1" />
							<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
						</div>
						<button type="submit" className="btn btn-primary">Submit</button>
						<ErrorMessage component={FormErrorModal} />
					</Form>
				</Formik>
				{ Object.keys(this.props.formData).length ? JSON.stringify(this.props.formData) : null }

			</section>
		);
	}
}