function Header({ nama, subjudul }) {
  return (
    <header className="header">
      <h1>{nama}</h1>
      <p>{subjudul}</p>
    </header>
  )
}

export default Header