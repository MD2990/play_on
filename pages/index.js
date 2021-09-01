import Head from 'next/head';
import Main from '../components/Main';

export default function Home() {
	return (
		<>
			<Head>
				<title>Play On</title>
				<meta name='description' content='Simple Game' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Main />
		</>
	);
}
