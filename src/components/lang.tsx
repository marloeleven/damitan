import React from 'react';

import { Subscribe } from 'unstated';

import { Lang } from 'contexts/lang';

interface ILangComponent {
  children: string;
  defaultValue?: string;
}

export default ({ children, defaultValue = '' }: ILangComponent) => (
  <Subscribe to={[Lang]}>
    {(lang: Lang) => {
      return lang.getText(children, defaultValue);
    }}
  </Subscribe>
);
