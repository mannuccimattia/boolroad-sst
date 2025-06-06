const viaggi = [
  {
    id: 1,
    nome: "Esplorazione del Gran Paradiso",
    data_partenza: "2025-07-15",
    data_arrivo: "2025-07-21",
    tipologia: "Avventure wild",
    luogo: "Valle d'Aosta",
    coordinatore: "Luca Moretti",
    accompagnatori: ["Giulia Ferri", "Marco Neri"],
    partecipanti: 18
  },
  {
    id: 2,
    nome: "Tour Culturale in Toscana",
    data_partenza: "2025-08-03",
    data_arrivo: "2025-08-08",
    tipologia: "Visite guidate soft",
    luogo: "Firenze, Siena, Pisa",
    coordinatore: "Elena Bianchi",
    accompagnatori: ["Francesca Rossi"],
    partecipanti: 20
  },
  {
    id: 3,
    nome: "Trekking nelle Dolomiti",
    data_partenza: "2025-06-22",
    data_arrivo: "2025-06-28",
    tipologia: "Avventure wild",
    luogo: "Val di Fassa, Trentino-Alto Adige",
    coordinatore: "Davide Conti",
    accompagnatori: ["Lucia Verdi", "Andrea Gallo"],
    partecipanti: 17
  },
  {
    id: 4,
    nome: "Alla scoperta di Roma Antica",
    data_partenza: "2025-09-10",
    data_arrivo: "2025-09-13",
    tipologia: "Visite guidate soft",
    luogo: "Roma",
    coordinatore: "Sara Mancini",
    accompagnatori: ["Federico Romano"],
    partecipanti: 19
  },
  {
    id: 5,
    nome: "Weekend Selvaggio in Maremma",
    data_partenza: "2025-06-06",
    data_arrivo: "2025-06-08",
    tipologia: "Avventure wild",
    luogo: "Parco della Maremma, Toscana",
    coordinatore: "Matteo Ricci",
    accompagnatori: ["Chiara De Luca"],
    partecipanti: 16
  }
];


const Homepage = () => {
  return (
    <div className="row mt-2 px-3 gy-3">
      <div className="col-12 text-end">
        <h1 className="fw-semibold text-white">Gite in corso</h1>
      </div>
      {viaggi.map(elem => (
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">{elem.nome}</h3>
              <h6 className="card-title fw-semibold">{elem.luogo}</h6>
              <div className="card-text">
                <i class="fa-regular fa-calendar me-1"></i>{elem.data_partenza}
                <i class="fa-regular fa-calendar ms-5 me-1"></i>{elem.data_arrivo}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Homepage