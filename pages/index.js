import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import PageLayout from '../components/PageLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures', {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'X-RapidAPI-Key': '64e1a0803emsh90496dace2b1354p1de268jsn1bb15e616fca',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        'content-type': 'application/json; charset=utf-8'
      }
    })
      .then(res => res.json())
      .then(res => {
        const fixtures = res.response
        console.log('ARTICULOS', fixtures);
        setFixtures(fixtures)
      })
  }, [])
  return (
    <PageLayout title="Fútbol App - Home">

      <div className={styles.container}>

        {fixtures.length === 0 && <p>Loading...</p>}
        {fixtures.length > 0 && fixtures.map((fixture, index) => {
          return ( 
            <>
              <div>
                <table className={styles.result}>
                  <thead >
                      <tr>
                          <th>Fecha</th>
                          <th>Liga</th>
                          <th>Local</th>
                          <th>Resultado</th>
                          <th>Visitante</th>
                          <th>Estadio</th>
                          <th>Árbitro</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr >
                          <td>{fixture.fixture.date}</td>
                          <td><img alt={fixture.league.name} src={fixture.league.logo} width={50} height={50}></img>
                            <p className={styles.leagueName}>{fixture.league.name}</p>
                          </td>
                          <td>
                            <img alt={fixture.teams.home.name} src={fixture.teams.home.logo} width={50} height={50}></img>
                          </td>
                          <td>
                            {/* <Image alt={fixture.teams.home.name} src={fixture.teams.home.logo} width={300} height={500} /> */}
                            <span>{fixture.score.fulltime.home}</span> 
                            <span>vs</span>
                            <span>{fixture.score.fulltime.away}</span>
                          </td>
                          <td>
                            <img alt={fixture.teams.away.name} src={fixture.teams.away.logo} width={50} height={50}></img>
                          </td>

                            {/* <Image alt={fixture.teams.away.name} src={fixture.teams.away.logo} width={300} height={500} /> */}

                            {/* {fixture.teams.home.name} {fixture.score.fulltime.home} vs  */}
                            {/* {fixture.teams.home.away} {fixture.score.fulltime.away} */}
                          <td>{fixture.fixture.venue.name}</td>
                          <td>{fixture.fixture.referee}</td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </>
          )
        })}





        {/* <Link href="/about">Sobre nosotros</Link> */}
        {/* <button onClick={() => router.push('/article/2')}>
          Navegar de forma programática a un artículo
        </button> */}
      </div>
    </PageLayout>
  )
}

 /* <img alt={`Image for article ${article.title}`} src={article.urlToImage}/> */
