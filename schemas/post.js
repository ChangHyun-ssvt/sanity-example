export default {
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      title: "Rich text example",
      name: "myRichTextExample",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
  ],
};
