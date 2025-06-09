import { Link } from 'react-router-dom'

const TripCard = ({ viaggio }) => {
  const { id, nome, luogo, data_partenza, data_arrivo } = viaggio;

  return (
    <Link className="link-trip" to={`/viaggi/${id}`}>
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">{nome}</h3>
            <h6 className="card-title fw-semibold">{luogo}</h6>
            <div className="card-text">
              <i className="fa-regular fa-calendar me-1"></i>{data_partenza}
              <i className="fa-regular fa-calendar ms-5 me-1"></i>{data_arrivo}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TripCard