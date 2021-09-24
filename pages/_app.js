//main stlyesheet
import '../styles/globals.scss'
import '../styles/menu.scss';
import '../styles/topbar.scss';

// component section
import '../styles/intro.scss';
import '../styles/contact.scss';
import '../styles/portfolio.scss';
import '../styles/portfolioList.scss';
import '../styles/services.scss';
import '../styles/testimonials.scss';
import '../styles/works.scss';


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
