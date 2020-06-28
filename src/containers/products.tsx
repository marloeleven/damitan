import React from 'react';
import Container from '@material-ui/core/Container';

import readFetch from 'utils/readFetch';

export default (props: any) => {
  const result = readFetch(props.sheets);

  return <Container maxWidth="lg">RENDER: {JSON.stringify(result)}</Container>;
};
