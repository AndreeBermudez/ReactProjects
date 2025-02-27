import { Layout } from '../layout';
import {TableFazt} from '../products/TableFazt';

export const ReportsPage = () => {
	return (
		<Layout>
			<section className='w-full md:h-screen px-2 py-4 bg-gray-100'>
				<section className='w-full h-full p-4 bg-gray-100 rounded-lg'>
					<TableFazt />
					{/* <SalesTable data={[]}/> */}
				</section>
			</section>
		</Layout>
	);
};
