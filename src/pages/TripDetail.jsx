import React from 'react'

const TripDetail = () => {
  return (
    <>

            <h4 className='tripTitle'>Partecipanti alla gita a Como</h4>
            <div className="input-group">
                <div className="form-outline d-flex" >
                    <input type="text" placeholder='Cerca partecipante...' className="form-control border border-2 border-primary rounded-0 rounded-start" />
                    <button type="submit" className="btn btn-primary rounded-0 rounded-end">
                        <i className="fas fa-search" /> Cerca
                    </button>
                </div>                
            </div>
            <hr />
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        Mario Rossi
                    </button>
                    </h2>
                <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <ul>
                                <li>Nome: {/*Nome*/}</li>
                                <li>Cognome: {/*Cognome*/}</li>
                                <li>Codice Fiscale: {/*Codice fiscale*/}</li> 
                                <li>Telefono: {/*Numero di telefono*/}</li>
                                <li>Email: {/*Email*/}</li>
                                <li>Numero di emergenza: {/*Numero di emergenza*/}</li>    
                            </ul>
                        </div>
                    </div>
                </div>
                <button
                type="button"
                className="btn btn-primary btn-rounded"
                data-mdb-ripple-init=""
                >
                    Torna alla lista gite
                </button>
            </div>
    </>
  )
}

export default TripDetail