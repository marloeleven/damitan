import GSheets from 'g-sheets-api';

const DEFAULT_OPTIONS = {
  sheetId: '1OUgaAxfeUXsGgyVSjwltjm9MGhjSraxuo61jUgBrN6Q',
  returnAllResults: true,
};

export default (options = DEFAULT_OPTIONS) =>
  new Promise((resolve, reject) => {
    try {
      GSheets({ ...DEFAULT_OPTIONS, ...options }, resolve);
    } catch (e) {
      reject(e);
    }
  });
