import { Suspense } from "react"
import Hero from "../components/hero"
import Partner from "../components/partner"
import Cards from "../components/cards"
import ProjectTeam from "../components/project-team"
import Banner from "../components/banner"
import CardOrder from "../components/card-order"
import Application from "../components/application"
import RequestConsultation from '../components/request-consultation/index'



function RouterComponent() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Hero />
        <Partner />
        <Cards />
        <ProjectTeam />
        <Banner />
        <CardOrder />
        {/* <Application /> */}
        <RequestConsultation />
      </Suspense>
    </>
  )
}

export default RouterComponent