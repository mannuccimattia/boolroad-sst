import { useContext, useState } from "react"
import TripContext from "../contexts/TripContext"
import { NavLink, useNavigate } from "react-router-dom"

const initialData = {
    id: '',
    nome: '',
    cognome: '',
    codice_fiscale: '',
    telefono: '',
    email: ''
}

const AddPartecipante = () => {
    const { viaggi } = useContext(TripContext)

    const navigate = useNavigate();

    const [formData, setFormData] = useState(initialData);

    const [isFormValid, setIsFormValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value

        setFormData((formData) => ({
            ...formData,
            id: nextId,
            [e.target.name]: value
        }))
    }

    // function for form data validation, returns true if all fields are correct
    const validateForm = () => {
        const errors = [];

        // whenever a field is empty, push an error
        if (!formData.nome) {
            errors.push({ field: "nome", message: "Il campo Nome non può essere vuoto" });
        }
        if (!formData.cognome) {
            errors.push({ field: "cognome", message: "Il campo Cognome non può essere vuoto" });
        }
        if (!formData.codice_fiscale) {
            errors.push({ field: "codice_fiscale", message: "Inserire un codice fiscale valido" });
        }
        if (!formData.telefono) {
            errors.push({ field: "telefono", message: "Inserire un numero di telefono" });
        }
        if (!formData.email) {
            errors.push({ field: "email", message: "Il campo Email non può essere vuoto" });
        }

        // if errors array is not empty, returns false
        if (errors.length > 0) {
            setErrorMessage(errors);
            return false;
        }

        // if no errors, returns true
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setIsFormValid(false);
            navigate(`/viaggi/${id}/aggiungi-partecipante`)
            return;
        }

        partecipanti.push(formData)
        setIsFormValid(true);
        setFormData(initialData);
        navigate(`/viaggi/${id}`);
    }

    //recuper l'id dall'url --- non toccare pls ---
    const id = window.location.href.split('/')[4]

    const partecipanti = viaggi[id - 1].partecipanti

    const nextId = partecipanti.length > 0 ? Math.max(...partecipanti.map(p => p.id)) + 1 : 1;



    return (
        <div className="row mt-2 px-3 gy-3">
            <h3 className="fw-bold mb-4">Aggiungi partecipante</h3>

            <form onSubmit={handleSubmit}>
                {!isFormValid && <div className="alert alert-danger border-danger mb-3">
                    <strong>Form data not valid</strong>
                </div>}
                <div className="row gy-3">
                    <div className="col-12">
                        <label htmlFor="name" className='control-label mb-1'>Nome</label>
                        <input
                            type="text"
                            className="form-control border-0 shadow py-2"
                            placeholder='Inserisci il nome'
                            name="nome"
                            id="nome"
                            value={formData.nome}
                            onChange={handleChange}
                        />
                        {errorMessage.map(err => {
                            if (err.field === "nome") return (
                                <span key={`${err.field}-key`} className="text-danger">
                                    {err.message}
                                </span>
                            )
                        })}
                    </div>

                    <div className="col-12">
                        <label htmlFor="cognome" className='control-label mb-1'>Cognome</label>
                        <input
                            type="text"
                            className="form-control border-0 shadow py-2"
                            placeholder='Inserisci il cognome'
                            name="cognome"
                            id="cognome"
                            value={formData.cognome}
                            onChange={handleChange}
                        />
                        {errorMessage.map(err => {
                            if (err.field === "cognome") return (
                                <span key={`${err.field}-key`} className="text-danger">
                                    {err.message}
                                </span>
                            )
                        })}
                    </div>

                    <div className="col-12">
                        <label htmlFor="name" className='control-label mb-1'>Codice Fiscale</label>
                        <input
                            type="text"
                            className="form-control border-0 shadow py-2"
                            placeholder='Inserisci il codice fiscale'
                            name="codice_fiscale"
                            id="codice_fiscale"
                            value={formData.cf}
                            onChange={handleChange}
                        />
                        {errorMessage.map(err => {
                            if (err.field === "codice_fiscale") return (
                                <span key={`${err.field}-key`} className="text-danger">
                                    {err.message}
                                </span>
                            )
                        })}
                    </div>

                    <div className="col-12">
                        <label htmlFor="name" className='control-label mb-1'>Numero di telefono</label>
                        <input
                            type="number"
                            className="form-control border-0 shadow py-2"
                            placeholder='Inserisci il numero di telefono'
                            name="telefono"
                            id="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                        />
                        {errorMessage.map(err => {
                            if (err.field === "telefono") return (
                                <span key={`${err.field}-key`} className="text-danger">
                                    {err.message}
                                </span>
                            )
                        })}
                    </div>

                    <div className="col-12">
                        <label htmlFor="name" className='control-label mb-1'>Email</label>
                        <input
                            type="email"
                            className="form-control border-0 shadow py-2"
                            placeholder='Inserisci la mail'
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errorMessage.map(err => {
                            if (err.field === "email") return (
                                <span key={`${err.field}-key`} className="text-danger">
                                    {err.message}
                                </span>
                            )
                        })}
                    </div>

                    <div className="col-12 d-flex justify-content-center mt-4 mb-3">
                        <button
                            type='submit'
                            className="btn bg-main text-white"
                        >Aggiungi partecipante</button>
                        <button
                            className="btn btn-danger ms-3"
                            onClick={() => { navigate(`/viaggi/${id}`) }}
                        >Annulla</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default AddPartecipante
