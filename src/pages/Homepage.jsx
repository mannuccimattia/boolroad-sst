import { useContext } from "react"
import TripContext from "../contexts/TripContext"
import TripCard from "../components/TripCard"


const Homepage = () => {

  const { viaggi } = useContext(TripContext)


  return (
    <div className="row mt-2 px-3 gy-3">
      <div className="col-12 text-end">
        <h1 className="fw-semibold text-white">Gite in corso</h1>
      </div>
      {viaggi.map((viaggio) => (
        <TripCard key={`viaggio-${viaggio.id}`} viaggio={viaggio} />
      ))}
    </div>
  )
}

export default Homepage