import React, {FC} from 'react';
import BrandingWLinks from './BrandingWLinks';
import Featured from './Featured';
import KeyFeatures from './KeyFeatures';

const App: FC = () => {
  return (
    <>
      <BrandingWLinks />
      <Featured />
      <KeyFeatures />
    </>
  );
};

export default App;
