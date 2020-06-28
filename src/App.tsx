import React, { Suspense } from 'react';

import gsheets from 'api/gsheets';
import useFetch from 'hooks/useFetch';
import Products from 'containers/products';
import Header from 'containers/header';
import Loader from 'containers/loader';

const App: React.FC = () => {
  const sheets = useFetch(gsheets);

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Products sheets={sheets} />
      </Suspense>
    </>
  );
};

export default App;
