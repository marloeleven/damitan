import React, { Suspense } from 'react';

import gsheets from 'api/gsheets';
import useFetch from 'hooks/useFetch';
import Header from 'containers/header';
import Sidebar from 'containers/sidebar';
import Products from 'containers/products';
import Loader from 'containers/loader';
import Facebook from 'containers/facebook';

import CONFIG from 'const/config';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

const App: React.FC = () => {
  const classes = useStyles();

  const sheets = useFetch(gsheets);

  return (
    <div className={classes.root}>
      <Header />
      <Sidebar />
      <Suspense fallback={<Loader />}>
        <Products sheets={sheets} />
      </Suspense>
      <Facebook
        app_id={CONFIG.fb.appId}
        app_version={CONFIG.fb.version}
        page_id={CONFIG.fb.messenger.page_id}
        color={CONFIG.fb.messenger.color}
      />
    </div>
  );
};

export default App;

{
  /* <div
          className="fb-login-button"
          data-max-rows="1"
          data-size="medium"
          data-button-type="continue_with"
          data-use-continue-as="true"
        ></div> */
}
