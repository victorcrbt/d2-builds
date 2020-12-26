import { get, merge } from 'lodash';

function getFileNames() {
  return require.context('./', true, /\.ts$/);
}

const context = getFileNames();

const files = context
  .keys()
  .filter(file => !file.match(/(index|missing)/))
  .reduce((translations, currentFile) => {
    const fileTranslations = context(currentFile)?.default;

    const [language] = currentFile
      .replace('./', '')
      .replace('.ts', '')
      .split('/');

    const languageTranslations = get(translations, language, {});

    return {
      ...translations,
      [language]: {
        ...merge(languageTranslations, fileTranslations),
      },
    };
  }, {});

export default {
  ...files,
};
