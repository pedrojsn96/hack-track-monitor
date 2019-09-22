import './index.scss';

import { Col, Row } from 'react-flexbox-grid';

import Mentor from './Mentor';
import Participant from './Participant';
import React from 'react';
import SegmentedControl from '../SegmentedControl';

class HowWorks extends React.PureComponent {
	state = {
		showMentor: true
	};

	handleMentor = () => {
		this.setState({ showMentor: true });
	};

	handleParticipant = () => {
		this.setState({ showMentor: false });
	};

	render() {
		const { showMentor } = this.state;
		return (
			<section className="how-works">
				<Row>
					<Col xs={12}>
						<div className="how-works__wrapper">
							<h1 className="how-works__title">See how it works</h1>
							<p className="how-works__subtitle">
								With an exclusive code generated, both mentor and participant
								can join your hackathon
							</p>
							<SegmentedControl
								left="The mentor"
								right="The participant"
								leftClick={this.handleMentor}
								rightClick={this.handleParticipant}
								leftSelected={showMentor}
								rightSelected={!showMentor}
							/>
						</div>
					</Col>
				</Row>
				<Row>{showMentor ? <Mentor /> : <Participant />}</Row>
			</section>
		);
	}
}

export default HowWorks;
