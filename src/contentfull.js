import { createClient } from "contentful";

export const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  environment: "master", // defaults to 'master' if not set
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

export const getEntries = async contentType => {
  try {
    const entries = await client.getEntries({ content_type: contentType });
    return entries.items;
  } catch (err) {
    console.log(err);
  }
};

export const getIntroTypeEntries = async type => {
  try {
    const entries = await client.getContentType(type);
    return entries;
  } catch (err) {
    console.log(err);
  }
};
