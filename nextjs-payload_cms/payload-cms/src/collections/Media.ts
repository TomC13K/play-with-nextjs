export const Media = {
  slug: "media",
  labels: {
    singular: "Media",
    plural: "Media",
  },
  // setting public acces
  access: {
    read: () => true,
  },
  upload: true, // enable uploads for this connection
  fields: [
    {
      name: "alt",
      label: "Alt",
      type: "text",
      required: true,
    },
  ],
};
