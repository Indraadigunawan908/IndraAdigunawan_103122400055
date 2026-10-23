import { useState } from 'react'
import Header from './components/Header'
import RingkasanServis from './components/RingkasanServis'
import FormTambahServis from './components/FormTambahServis'
import DaftarServis from './components/DaftarServis'

const dataAwal = [
  { id: 1, plat: 'R 4521 AB', pemilik: 'Budi Santoso', kendaraan: 'Honda Beat 2019', keluhan: 'Ganti oli dan servis rutin', status: 'Selesai' },
  { id: 2, plat: 'R 6023 CD', pemilik: 'Siti Rahmawati', kendaraan: 'Yamaha NMAX 2021', keluhan: 'Rem depan bunyi berdecit', status: 'Dikerjakan' },
  { id: 3, plat: 'R 1187 EF', pemilik: 'Agus Prasetyo', kendaraan: 'Toyota Avanza 2016', keluhan: 'AC kurang dingin', status: 'Dikerjakan' },
  { id: 4, plat: 'R 3345 GH', pemilik: 'Dewi Lestari', kendaraan: 'Honda Vario 125 2020', keluhan: 'Mesin sulit dihidupkan pagi hari', status: 'Menunggu' },
  { id: 5, plat: 'R 8890 IJ', pemilik: 'Rudi Hartono', kendaraan: 'Suzuki Ertiga 2018', keluhan: 'Ganti kampas rem dan spooring', status: 'Menunggu' },
]

function App() {
  const [daftarServis, setDaftarServis] = useState(dataAwal)

  const tambahServis = (servisBaru) => {
    setDaftarServis([...daftarServis, { ...servisBaru, id: Date.now() }])
  }

  return (
    <div className="halaman">
      <Header nama="Bengkel Maju Jaya" subjudul="Pencatatan kendaraan yang masuk servis" />
      <RingkasanServis daftarServis={daftarServis} />
      <FormTambahServis onTambah={tambahServis} />
      <DaftarServis daftarServis={daftarServis} />
    </div>
  )
}

export default App