'use client';

import Greetings from '../components/Greetings/Greetings';
import StatisticsCard from '../components/StatisticsCard/StatisticsCard';

export default function Dashboard() {
	return (
		<div className='w-full'>
			<Greetings />
			<StatisticsCard />
		</div>
	);
}
