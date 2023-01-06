import Head from 'next/head'

export default function PageLayout ({ children, title = 'Fútbol App' }) {
    return (
        <>
        <Head>
            <title>{title}</title>
            <meta name="description" content="The best football app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>Fútbol App </header>
        <main>
            {children}
        </main>
        </>
    )
}