import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "670f49a0-f9cb-4392-85fb-fbbc6c951e40",
  token: "9274de831f1790fe721b98c9a738d035967b8734",
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  media: {
    tina:{
      publicFolder: 'public',
      mediaRoot: "assets",
    }
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "pages",
        path: "content/pages",
        format: "json",
        ui : {
          router: (props)=>{
            if(props.document._sys.relativePath === "landingPage.json") return "/";
            return props.document._sys.filename;
          }
        },
        fields: [
          {
            name: "hero_text",
            type: "rich-text",
          },
          {
            name: "links",
            label: "Hero links",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.label };
              },
            },
            fields: [
              { type: "string", name: "link" },
              { type: "string", name: "label" },
              {
                type: "string",
                name: "style",
                options: ["simple", "button"],
              },
            ],
          },
          {
            type: 'image',
            label: 'Hero image',
            name: 'imgSrc',
          },
        ],
      },
    ],
  },
});
