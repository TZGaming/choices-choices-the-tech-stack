import path from 'node:path';
import * as sass from 'sass';

export default function (eleventyConfig) {
  eleventyConfig.setInputDirectory('src');
  eleventyConfig.setOutputDirectory('dist');
  eleventyConfig.addPassthroughCopy('assets');

  eleventyConfig.addExtension('scss', {
    outputFileExtension: 'css',
    useLayouts: false,
    compile: async function (inputContent, inputPath) {
      const parsed = path.parse(inputPath);
      if (parsed.name.startsWith('_')) {
        return;
      }

      const compiled = sass.compileString(inputContent, {
        loadPaths: [parsed.dir || '.', this.config.dir.includes],
        silenceDeprecations: ['import', 'global-builtin', 'slash-div'],
      });

      this.addDependencies(inputPath, compiled.loadedUrls);

      return async () => compiled.css;
    },
  });
  eleventyConfig.addTemplateFormats('scss');
}

export const config = {
  markdownTemplateEngine: 'njk',
  htmlTemplateEngine: 'njk',
};
