import { useContext } from "react"
import TripContext from "../contexts/TripContext"
import TripCard from "../components/TripCard"
import { NavLink } from "react-router-dom"


const Homepage = () => {

  const { viaggi, tab, setTab } = useContext(TripContext)


  return (
    <div className="row mt-2 px-3 gy-3">
      <h3 className="fw-bold">Dashboard viaggi</h3>
      <ul className="homepage-tabs nav nav-underline d-flex justify-content-evenly">
        <li className="nav-item">
          <a
            className={`nav-link text-dark fw-medium btn rounded-0 ${tab === 0 && 'active'}`}
            onClick={() => setTab(0)}
          >In corso</a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link text-dark fw-medium btn rounded-0 ${tab === 1 && 'active'}`}
            onClick={() => setTab(1)}
          >Terminati</a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link text-dark fw-medium btn rounded-0 ${tab === 2 && 'active'}`}
            onClick={() => setTab(2)}
          >Futuri</a>
        </li>
      </ul>

      <br />

      <NavLink
        to={'/viaggi/crea-viaggio'}
        id="add-button"
        className={`shadow`}
      >
        <i className="fa-solid fa-plus text-light fs-4"></i>
      </NavLink>

      {viaggi.map((viaggio) => {
        const partenza = new Date(viaggio.data_partenza)
        const rientro = new Date(viaggio.data_arrivo)

        const today = new Date()

        const viaggiInCorso = (today >= partenza && today <= rientro) && <TripCard key={`viaggio-in-corso-${viaggio.id}`} viaggio={viaggio} />

        const viaggiTerminati = (today > rientro) && <TripCard key={`viaggio-terminato-${viaggio.id}`} viaggio={viaggio} />

        const viaggiFuturi = (today < partenza) && <TripCard key={`viaggio-futuro-${viaggio.id}`} viaggio={viaggio} />

        let render

        if (tab === 0) {
          render = viaggiInCorso
        } else if (tab === 1) {
          render = viaggiTerminati
        } else if (tab === 2) {
          render = viaggiFuturi
        }

        return render
      })}
    </div>
  )
}

export default Homepage