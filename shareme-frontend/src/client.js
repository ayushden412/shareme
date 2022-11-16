import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

const projectId="1yaogh2k"
const token="sk10vdPuf976EA3OhQsb4zSobDZbe0xfJUREMUKt7ALvYiH9riJ1XYnvIF5Y5Yf8LHHoSrbMX2Au4hih64kGaaskD5Peo2ttnyRy4vKC2oZF6whrCUe2Ol1kfLEQFTlVPff630OeLPGMHhxatdK8sRqJqAgcyEVgwiVYHLtvQ22YEFpQhnm9"

export const client = sanityClient({
    projectId: projectId,
    dataset:'production',
    apiVersion:'2021-10-21',
    useCdn:true,
    token: token,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);