import logoImg from "../../assets/main-imgs/logo.png";

export default function Header() {
  return (
    <>
      {/* <div className="announcement-bar">
        [!!!] next pop-up: 12/13 @factoryobscura
      </div> */}
      <header className="header">
        <button className="header__menu-btn">menu</button>
        <div className="header__logo">
          <img src={logoImg} alt="logo"></img>
        </div>
        <button className="header__bag-btn">bag[0]</button>
      </header>
    </>
  );
}
