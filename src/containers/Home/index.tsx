import React, {FC} from 'react';
import BrandingWLinks from './BrandingWLinks';
import Featured from './Featured';
import KeyFeatures from './KeyFeatures';
import Roadmap from './Roadmap';

const App: FC = () => {
  return (
    <>
      <BrandingWLinks />
      <Featured />
      <KeyFeatures />
      <Roadmap />
    </>
  );
};

export default App;
