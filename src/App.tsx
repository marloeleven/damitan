import React, { Suspense } from 'react';

import gsheets from 'api/gsheets';
import useFetch from 'hooks/useFetch';
import Products from 'containers/products';
import Header from 'containers/header';
import Loader from 'containers/loader';
import Facebook from 'containers/facebook';

import CONFIG from 'const/config';

const App: React.FC = () => {
  const sheets = useFetch(gsheets);

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Products sheets={sheets} />
      </Suspense>
      <Facebook
        page_id={CONFIG.fb.messenger.page_id}
        color={CONFIG.fb.messenger.color}
      />
    </>
  );
};

export default App;
