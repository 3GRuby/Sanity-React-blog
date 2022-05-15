import client from "@sanity/client"

export default client({
    projectId: "4hex1aly",
    dataset: "production",
    useCdn: true,
    apiVersion:"2022-05-12"
})