import { getTweets } from "../../lib/twitter";

export default async(_, res) => {
    const tweets = await getTweets(['1443150082203869185'])

    return res.status(200).json(tweets)

}