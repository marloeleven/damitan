import React, { Suspense } from 'react';

import gsheets from 'api/gsheets';
import useFetch from 'hooks/useFetch';
import Products from 'containers/products';

function App() {
  const sheets = useFetch(gsheets);

  return (
    <div className="App">
      <Suspense fallback={'<h1>Loading...</h1>'}>
        {/* {JSON.stringify(sheets)} */}
        <Products sheets={sheets} />
      </Suspense>
    </div>
  );
}

export default App;
