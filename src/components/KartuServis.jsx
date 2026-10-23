function KartuServis({ plat, pemilik, kendaraan, keluhan, status }) {
  return (
    <article className="kartu">
      <div className="plat">{plat}</div>
      <div className="isi">
        <h3>{kendaraan}</h3>
        <p className="pemilik">Pemilik: {pemilik}</p>
        <p>{keluhan}</p>
      </div>
      <span className={`status ${status.toLowerCase()}`}>{status}</span>
    </article>
  )
}

export default KartuServis
