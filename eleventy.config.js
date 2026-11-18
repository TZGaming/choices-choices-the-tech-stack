import * as sass from "sass";

export default function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setOutputDirectory("dist");
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",
    compile: async function (_inputContent, inputPath) {
      const result = sass.compile(inputPath, { style: "expanded" });
      return async function () {
        return result.css;
      };
    },
  });

  eleventyConfig.ignores.add("src/css/_*.scss");
}
