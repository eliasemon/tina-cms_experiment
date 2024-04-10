import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/670f49a0-f9cb-4392-85fb-fbbc6c951e40/github/main', token: '9274de831f1790fe721b98c9a738d035967b8734', queries,  });
export default client;
  