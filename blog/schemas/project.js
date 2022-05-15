export default{
    name:"project",
    title:"Project",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Project name",
        type: "string",
      },
      {
        name: "mainImage",
        title: "Main image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "publishedAt",
        title: "Published at",
        type: "datetime",
      },
      {
        name: "body",
        title: "Project description",
        type: "blockContent",
      },
    ],
}

