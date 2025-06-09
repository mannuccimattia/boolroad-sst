import { useState } from "react";
import { useContext } from "react";
import TripContext from "../contexts/TripContext";


const AddViaggio = () => {

    const initialData = {
        nome: "",
        data_partenza: "",
        data_arrivo: "",
        tipologia: "",
        color_tag: "",
        luogo: "",
        accompagnatore: "",
        partecipanti: []
    };

    const { viaggi } = useContext(TripContext);

    const maxId = Math.max.apply(null, viaggi.map(item => item.id))

    // state variables
    const [formData, setFormData] = useState(initialData);
    const [isFormValid, setIsFormValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState([]);

    // function for storing form data
    const setFieldValue = (e) => {
        const { value, name } = e.target;

        setFormData({ ...formData, [name]: value, id: maxId });
    };

    // function for form data validation, returns true if all fields are correct
    const validateForm = () => {
        const errors = [];

        // whenever a field is empty, push an error
        if (!formData.nome) {
            errors.push({ field: "nome", message: "Il campo Nome non può essere vuoto" });
        }
        if (!formData.data_partenza) {
            errors.push({ field: "data_partenza", message: "Inserire una data di partenza" });
        }
        if (!formData.data_arrivo) {
            errors.push({ field: "data_arrivo", message: "Inserire una data di arrivo" });
        }
        if (!formData.tipologia) {
            errors.push({ field: "tipologia", message: "Scegliare una tipologia" });
        }
        if (!formData.luogo) {
            errors.push({ field: "luogo", message: "Il campo Luogo non può essere vuoto" });
        }
        if (!formData.accompagnatore) {
            errors.push({ field: "accompagnatore", message: "Il campo Accompagnatore non può essere vuoto" });
        }

        // if errors array is not empty, returns false
        if (errors.length > 0) {
            setErrorMessage(errors);
            return false;
        }

        // if no errors, returns true
        return true;
    };

    // function for submitting form data to db
    const handleSubmit = (e) => {
        e.preventDefault();

        // if validation fails, update state and exit
        if (!validateForm()) {
            setIsFormValid(false);
            return;
        }

        console.log(formData)

        // // if valid, do ajax call for storing the review
        // viaggi.push(formData).then(() => {
        //     setIsFormValid(true);
        //     setFormData(initialData);
        //     console.log(viaggi);
        // })
    }

    return (
        <div className="row mt-2 px-3 gy-3">
            <h3 className="fw-bold mb-4">Aggiungi viaggio</h3>

            <form className="mb-3" onSubmit={handleSubmit}>
                <div className="row gy-3">
                    <div className="col-12">
                        <label htmlFor="name" className='control-label opaque-mid mb-1'>Nome</label>
                        <input
                            id="nome"
                            name="nome"
                            type="text"
                            className="form-control border-0 shadow py-2"
                            placeholder='Inserisci il titolo del viaggio'
                            value={formData.nome}
                            onChange={setFieldValue}
                        />
                        {errorMessage.map(err => {
                            if (err.field === "nome") return (
                                <span key={`${err.field}-key`} className="text-danger opaque-mid">
                                    {err.message}
                                </span>
                            )
                        })}
                    </div>

                    <div className="col-12">
                        <label htmlFor="name" className='control-label opaque-mid mb-1'>Luogo</label>
                        <input
                            id="luogo"
                            name="luogo"
                            type="text"
                            className="form-control border-0 shadow py-2"
                            placeholder='Inserisci il luogo del viaggio'
                            value={formData.luogo}
                            onChange={setFieldValue}
                        />
                        {errorMessage.map(err => {
                            if (err.field === "luogo") return (
                                <span key={`${err.field}-key`} className="text-danger opaque-mid">
                                    {err.message}
                                </span>
                            )
                        })}
                    </div>

                    <div className="col-12">
                        <label htmlFor="name" className='control-label opaque-mid mb-1'>Tipologia</label>
                        <select
                            id="tipologia"
                            name="tipologia"
                            className="form-select border-0 shadow py-2"
                            aria-label="Default select example"
                            value={formData.tipologia}
                            onChange={setFieldValue}
                        >
                            <option value="">Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        {errorMessage.map(err => {
                            if (err.field === "tipologia") return (
                                <span key={`${err.field}-key`} className="text-danger opaque-mid">
                                    {err.message}
                                </span>
                            )
                        })}
                    </div>

                    <div className="col-12">
                        <label htmlFor="name" className='control-label opaque-mid mb-1'>Data di Partenza</label>
                        <input
                            id="data_partenza"
                            name="data_partenza"
                            type="date"
                            className="form-control border-0 shadow py-2"
                            value={formData.data_partenza}
                            onChange={setFieldValue}
                        />
                        {errorMessage.map(err => {
                            if (err.field === "data_partenza") return (
                                <span key={`${err.field}-key`} className="text-danger opaque-mid">
                                    {err.message}
                                </span>
                            )
                        })}
                    </div>

                    <div className="col-12">
                        <label htmlFor="name" className='control-label opaque-mid mb-1'>Data di Rientro</label>
                        <input
                            id="data_arrivo"
                            name="data_arrivo"
                            type="date"
                            className="form-control border-0 shadow py-2"
                            value={formData.data_arrivo}
                            onChange={setFieldValue}
                        />
                        {errorMessage.map(err => {
                            if (err.field === "data_arrivo") return (
                                <span key={`${err.field}-key`} className="text-danger opaque-mid">
                                    {err.message}
                                </span>
                            )
                        })}
                    </div>

                    <div className="col-12">
                        <label htmlFor="name" className='control-label opaque-mid mb-1'>Accompagnatore</label>
                        <input
                            id="accompagnatore"
                            name="accompagnatore"
                            type="text"
                            className="form-control border-0 shadow py-2"
                            placeholder="Inserisci il nome dell'accompagnatore"
                            value={formData.accompagnatore}
                            onChange={setFieldValue}
                        />
                        {errorMessage.map(err => {
                            if (err.field === "accompagnatore") return (
                                <span key={`${err.field}-key`} className="text-danger opaque-mid">
                                    {err.message}
                                </span>
                            )
                        })}
                    </div>

                    <button
                        type='submit'
                        className="btn bg-main text-white"
                    >Aggiungi viaggio</button>
                </div>
            </form>
        </div>
    )
}

export default AddViaggio
