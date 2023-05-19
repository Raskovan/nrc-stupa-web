import { createClient } from "contentful";

export const client = createClient({
  space: "iu9jw6aao73j",
  environment: "master", // defaults to 'master' if not set
  accessToken: "32GgrEJ8MAoqNGSyTglibI9ty2akwQMFxaxYNQSVRrY"
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
