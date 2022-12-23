import { franc } from "franc";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const langs = require("langs");

const input = process.argv[2];

const langCodeVar = franc(input);

if(langCodeVar === 'und') {
    console.log("SORRY I COULD NOT FIGURE OUT THAT LANGUAGE")
} else {
const language = langs.where("3", langCodeVar);
console.log(`Our best guess is: ${language.name}`)
}