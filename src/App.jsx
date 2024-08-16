import Current from "./components/Current/Current";
import Navbar from "./components/Navbar/Navbar";
import Daily from "./components/Daily/Daily";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getLatLon } from "./store/weather/weatherSlice";
import Loader from "./components/UI/Loader";
import { initTheme } from "./store/theme/themeSlice";

function App() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.weather);
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    dispatch(getLatLon("Ташкент"))  
    dispatch(initTheme())
  }, []);

  return (
    <>
      <div className={`wrapper ${theme}`}>
        <Navbar />
        {data ? (
          <div className="container">
            <main className="main">
              <Current />
              <Daily />
            </main>
          </div>
        ) : (
          <Loader/>
          
        )}
      </div>
    </>
  );
}

export default App;
