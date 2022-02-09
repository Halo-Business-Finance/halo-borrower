import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "nprogress/nprogress.css";
import dynamic from 'next/dynamic';
import 'antd/dist/antd.css';
import "react-multi-carousel/lib/styles.css";
import AuthContextProvider from "../utils/AuthContext";
export default function App({ Component, pageProps }) {

	const ProgressBar = dynamic(
		() => {
			return import("../components/ProgressBar");
		},
		{ ssr: false },
	);

	return (
		<>

			<ProgressBar />
			<AuthContextProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</AuthContextProvider>
		</>
	)
}
