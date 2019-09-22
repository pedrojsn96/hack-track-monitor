import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header/index';
import HowWorks from '../components/HowWorks';
import Mentoring from '../components/Mentoring';
import Navbar from '../components/Navbar';
import Stressful from '../components/Stressful';
import Why from '../components/Why';

const Home = () => (
	<div>
		<Navbar />
		<Header />
		<Stressful />
		<Mentoring />
		<Why />
		<HowWorks />
		<Footer />
	</div>
);

export default Home;
