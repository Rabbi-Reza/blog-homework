import React from 'react'
import Head from "next/head";

const HeadDefault = ({ title }) => {
  return (
    <Head>
    <title>{title}</title>
    <meta name="description" content="Blog Post app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  )
}

export default HeadDefault