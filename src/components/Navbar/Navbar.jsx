import s from "./Navbar.module.scss";
import { logo, kaplya } from "../../utils/reExport";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getLatLon } from "../../store/weather/weatherSlice";
import { toggleTheme } from "../../store/theme/themeSlice";
const Navbar = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    dispatch(getLatLon(city));
    setCity("");
  };

  return (
    <div className="container">
      <nav className={s.nav}>
        <a href="#" className={s.logo}>
          <img src={logo} alt="" />
          <span className={s.logo__span}>react weather</span>
        </a>
        <div className={s.nav__search}>
          <img
            style={{ cursor: "pointer" }}
            src={kaplya}
            alt=""
            onClick={() => dispatch(toggleTheme())}
          />
          <form onSubmit={(event) => submit(event)}>
            <input
              placeholder="Выбрать город"
              type="text"
              className={s.nav__input}
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;