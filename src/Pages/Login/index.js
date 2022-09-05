import React, { useEffect } from 'react';
import './index.scss';

const Login = () => {

  useEffect(() => {
    document.title = 'Hotstar: Login Page';
  },[])

	return (
		<section className='login-container'>
			<div className='content'>
				<div className='login-con'>
					<img
						className='cta-one'
						src='images/login/cta-logo-one.svg'
						alt=''
					></img>
					<button className='sign-up'>GET ALL THERE</button>
					<p className='description'>
						Get Premier Access to House of the Dragon for an additional fee with
						a Disney+ subscription. As of 04 Sept 2022, the starting price of
						Disney+ is Rs 499.00.
					</p>
					<img
						className='cta-two'
						src='images/login/cta-logo-two.png'
						alt=''
					></img>
				</div>
				<div
					className='bg-image'
					style={{
						backgroundImage: 'url(images/login/login-background.jpg)',
					}}
				></div>
			</div>
		</section>
	);
};

export default Login;
