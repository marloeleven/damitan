import React from 'react';

import readFetch from 'utils/readFetch';

export default (props: any) => {
  const result = readFetch(props.sheets);

  return <div>RENDER: {JSON.stringify(result)}</div>;
};
