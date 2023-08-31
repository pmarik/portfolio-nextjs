
import Head from 'next/head'

type CustomHeadProps = {
    title: string
    description: string
}

function CustomHead({
    title,
    description
}:CustomHeadProps){

    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} key="title" />
            <meta name="description" content={description} />
        </Head>
    )
}

export default CustomHead