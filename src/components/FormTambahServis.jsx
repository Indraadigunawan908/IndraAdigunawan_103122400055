import { useState } from 'react'

const pilihanStatus = ['Menunggu', 'Dikerjakan', 'Selesai']

function FormTambahServis({ onTambah }) {
  const [plat, setPlat] = useState('')
  const [pemilik, setPemilik] = useState('')
  const [kendaraan, setKendaraan] = useState('')
  const [keluhan, setKeluhan] = useState('')
  const [status, setStatus] = useState(pilihanStatus[0])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!plat.trim() || !pemilik.trim() || !kendaraan.trim() || !keluhan.trim()) return

    onTambah({
      plat: plat.trim().toUpperCase(),
      pemilik: pemilik.trim(),
      kendaraan: kendaraan.trim(),
      keluhan: keluhan.trim(),
      status,
    })

    setPlat('')
    setPemilik('')
    setKendaraan('')
    setKeluhan('')
    setStatus(pilihanStatus[0])
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Catat kendaraan masuk</h2>
      <label>
        Plat nomor
        <input value={plat} onChange={(e) => setPlat(e.target.value)} placeholder="R 1234 XY" />
      </label>
      <label>
        Nama pemilik
        <input value={pemilik} onChange={(e) => setPemilik(e.target.value)} placeholder="Contoh: Hendra Wijaya" />
      </label>
      <label>
        Kendaraan
        <input value={kendaraan} onChange={(e) => setKendaraan(e.target.value)} placeholder="Contoh: Honda Scoopy 2022" />
      </label>
      <label>
        Status
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          {pilihanStatus.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </label>
      <label className="lebar">
        Keluhan / pekerjaan
        <input value={keluhan} onChange={(e) => setKeluhan(e.target.value)} placeholder="Contoh: Ganti ban belakang" />
      </label>
      <button type="submit">Tambah</button>
    </form>
  )
}

export default FormTambahServis