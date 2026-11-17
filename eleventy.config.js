export default function (eleventyConfig) {
  eleventyConfig.setInputDirectory('src');
  eleventyConfig.setOutputDirectory('dist');
  eleventyConfig.addPassthroughCopy('assets');
}

export const config = {
  markdownTemplateEngine: 'njk',
  htmlTemplateEngine: 'njk',
};
