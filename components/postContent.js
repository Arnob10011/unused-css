"use server";
import { PurgeCSS } from "purgecss";
import { minify } from "html-minifier-terser";
import { gulp } from "gulp";

export async function postContent(data) {
  const markup = data.get("markup");

  const minimarkup = await minify(markup, {
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
  });
  minimarkup;

  const stylesheet = data.get("stylesheet");

  const purgeCSSResult = await new PurgeCSS().purge({
    content: [
      {
        raw: minimarkup,
        extension: "html",
      },
    ],
    css: [
      {
        raw: ".useless{background-color:green}.useless2{background-color:green}.useless3{background-color:green}.useless4{background-color:green}.useless5{background-color:green}.useless6{background-color:green}.useless7{background-color:green}.used{background-color:aqua}",
      },
    ],
  });
  console.log(purgeCSSResult);
}
