import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "nprogress/nprogress.css";
import dynamic from 'next/dynamic'

export default function App({ Component, pageProps }) {

const ProgressBar = dynamic(
  () => {
    return import("../components/ProgressBar");
  },
  { ssr: false },
);

	return(
		<>
			
		<ProgressBar />
		<Layout>
			<Component {...pageProps} />
		</Layout>
		</>
	)
}
