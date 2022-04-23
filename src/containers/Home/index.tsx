import React, {FC} from 'react';
import BrandingWLinks from './BrandingWLinks';
import Featured from './Featured';
import Footer from './Footer';
import KeyFeatures from './KeyFeatures';
import Newsletter from './Newsletter';
import Roadmap from './Roadmap';

const App: FC = () => {
  return (
    <>
      <BrandingWLinks />
      <Featured />
      <KeyFeatures />
      <Roadmap />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
