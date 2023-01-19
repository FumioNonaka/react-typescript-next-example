import Head from 'next/head';
import type { FC } from 'react';
import Layout from '../../components/layout';

const FirstPost: FC = () => {
	return (
		<Layout>
			<Head>
				<title>First Post</title>
			</Head>
			<h1>First Post</h1>
		</Layout>
	);
};
export default FirstPost;
