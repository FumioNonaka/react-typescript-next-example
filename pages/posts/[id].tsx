import Head from 'next/head';
import type { GetStaticProps } from 'next';
import { FC } from 'react';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

type PostData = {
	postData: {
		id: string;
		title: string;
		date: string;
		contentHtml: string;
	}
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postData = await getPostData(params?.id as string);
	return {
		props: {
			postData,
		},
	};
};
export const getStaticPaths = async () => {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
};
const Post: FC<PostData> = ({ postData }) => {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h1 className={utilStyles.headingXl}>{postData.title}</h1>
				<div className={utilStyles.lightText}>
					<Date dateString={postData.date} />
				</div>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
		</Layout>
	);
}
export default Post;
