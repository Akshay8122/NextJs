// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { Tweet } from '../../typings'
import {sanityClient} from '../../sanity'
const feedQuery = groq `
*[_type == "tweet"  && !blockTweet]{
    _id,
    ... 
} | order(_createdAt desc)
` 

type Data = {
  tweet:Tweet[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

const tweet: Tweet[] = await sanityClient.fetch(feedQuery)
  
  res.status(200).json({ tweet})
}
