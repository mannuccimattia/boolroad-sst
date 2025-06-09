import { useState, useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import TripContext from '../contexts/TripContext'
import PartecipanteCard from '../components/PartecipanteCard'

const TripDetail = () => {
    const { viaggi } = useContext(TripContext)

    const { id } = useParams()

    const [trip, setTrip] = useState({})

    const [searchInput, setSearchInput] = useState("")

    const [partecipantiFiltrati, setPartecipantiFiltrati] = useState([])

    useEffect(() => {
        const foundTrip = viaggi.find((viaggio) => (viaggio.id.toString() === id))

        if (foundTrip) {
            setTrip(foundTrip)
            setPartecipantiFiltrati(foundTrip.partecipanti)
        }
    }, [])


    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value)
    }

    useEffect(() => {
        if (trip.partecipanti) {
            const filtered = trip.partecipanti.filter((partecipante) => {
                const fullName = `${partecipante.nome} ${partecipante.cognome}`.toLowerCase()
                return fullName.includes(searchInput.toLowerCase())
            })
            setPartecipantiFiltrati(filtered)
        }
    }, [searchInput, trip.partecipanti])


    return (
        <>
            <div className="row mt-2 px-3 gy-3">
                <div className="col-12">
                    <h3 className='fw-bold'>
                        <div>Partecipanti alla gita</div>
                        <div className='fw-semibold'>
                            "{trip.nome}":
                        </div>
                    </h3>
                    <div className='text-secondary'>
                        <span>
                            Dal:
                            <em> {trip.data_partenza}</em>
                        </span>
                        <span className='ms-3'>
                            Al:
                            <em> {trip.data_arrivo}</em>
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <input
                            type="text"
                            className="form-control border border-1 border-main rounded"
                            placeholder="Cerca partecipante..."
                            value={searchInput}
                            onChange={handleChange}
                        />
                        <div className="wrapper mt-4 d-flex justify-content-between align-items-center
                        ">
                            <span className='me-2 text-secondary'>Oppure</span>

                            <Link to={`/`}>
                                <button
                                    className="btn btn-primary
                                bg-main rounded"
                                    type="button"
                                >Torna alla lista gite
                                </button>
                            </Link >
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div id="accordion" className='mb-5'>
                {partecipantiFiltrati && partecipantiFiltrati.map((partecipante) => {
                    return (
                        <PartecipanteCard
                            key={`person-${partecipante.id}`}
                            partecipante={partecipante}
                        />
                    )
                })
                }
            </div>
        </>
    )
}

export default TripDetail