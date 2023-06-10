import { createJWT, hashPassword } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default async function register(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  if (req.method === "POST"){
    const user = await db.user.create({
      data: {
        email: req.body.email,
        password: await hashPassword(req.body.password),
        firstName: req.body.firstName,
        lastName: req.body.lastName
      }
    })

    const jwt = await createJWT(user)

    const cookieName = process.env.COOKIE_NAME

    if (typeof cookieName === 'string'){
    res.setHeader(
      'Set-Cookie',
      serialize(cookieName, jwt, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      })
    )

    } else {
      throw new Error('Invalid cookie name')
    }


    res.status(201)
    console.log('user registered successfully')
    res.json({})
  } else {
    res.status(402)
    res.json({})
  }
}
