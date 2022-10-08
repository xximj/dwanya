import i18next, { i18nTyped, Resource } from "i18next";
import { ar } from "./translations/ar";
import { en } from "./translations/en";
import { getLanguages } from "./utils";

export const languages = [
  { resource: ar, code: "ar", name: "العربية" },
  { resource: en, code: "en", name: "English" },
];

const resources: Resource = {};
languages.forEach(l => (resources[l.code] = l.resource));

function format(value: any, format: any): any {
  return format === "uppercase" ? value.toUpperCase() : value;
}

i18next.init({
  debug: false,
  compatibilityJSON: "v3",
  // load: 'languageOnly',
  // initImmediate: false,
  lng: getLanguages()[0],
  fallbackLng: "ar",
  resources,
  interpolation: { format },
});

export const i18n = i18next as i18nTyped;
