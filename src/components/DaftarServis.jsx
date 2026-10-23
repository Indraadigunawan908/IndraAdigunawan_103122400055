import KartuServis from './KartuServis'

function DaftarServis({ daftarServis }) {
  if (daftarServis.length === 0) {
    return <p className="kosong">Belum ada data servis</p>
  }

  return (
    <section className="daftar">
      {daftarServis.map((servis) => (
        <KartuServis
          key={servis.id}
          plat={servis.plat}
          pemilik={servis.pemilik}
          kendaraan={servis.kendaraan}
          keluhan={servis.keluhan}
          status={servis.status}
        />
      ))}
    </section>
  )
}

export default DaftarServis
