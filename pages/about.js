import Link from 'next/link'
import PageLayout from '../components/PageLayout'

export default function About () {
    return (
    <PageLayout title="Sobre nosotros">
        <h1>ABOUT</h1>
        <Link href="/">Ir a la Home</Link>
    </PageLayout>        
    )
}