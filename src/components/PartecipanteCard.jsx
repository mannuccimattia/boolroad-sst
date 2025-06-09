const PartecipanteCard = ({ partecipante }) => {
    const { nome, cognome, codice_fiscale, telefono, email, id } = partecipante;

    return (
        <div className="accordion mb-2">
            <div className="accordion-item">
                <h2 className="accordion-header" id={`heading-${id}`}>
                    <button
                        className="accordion-button collapsed bg-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${id}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${id}`}
                    >
                        {nome} {cognome}
                    </button>
                </h2>
                <div
                    id={`collapse-${id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading-${id}`}
                    data-bs-parent="#accordion"
                >
                    <div className="info accordion-body bg-main text-white rounded-bottom pb-1">
                        <ul className="ps-0">
                            <li>
                                <strong className="text-second">Codice Fiscale:</strong>
                                <span> {codice_fiscale}</span>
                            </li>
                            <li>
                                <strong className="text-second">Telefono:</strong>
                                <span> {telefono}</span>
                            </li>
                            <li>
                                <strong className="text-second">Email:</strong>
                                <span> {email}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartecipanteCard