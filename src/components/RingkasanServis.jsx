function RingkasanServis({ daftarServis }) {
  const hitung = (status) => daftarServis.filter((s) => s.status === status).length

  return (
    <section className="ringkasan">
      <div><strong>{daftarServis.length}</strong> kendaraan masuk</div>
      <div><strong>{hitung('Dikerjakan')}</strong> dikerjakan</div>
      <div><strong>{hitung('Selesai')}</strong> selesai</div>
    </section>
  )
}

export default RingkasanServis
