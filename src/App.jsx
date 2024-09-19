import { useEffect } from "react";
import { fetchDataFromApi } from "./Utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfig } from "./Store/mainSlice";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Explore from "./Pages/explore/Explore";
import PageNotFound from "./Pages/404PageNotFound/PageNotFound";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import Details from "./Pages/details/Details";
import SearchResult from "./Pages/searchResult/SearchResult";

function App() {
  // const dispatch = useDispatch();
  // const url = useSelector((state) => state.home.url);

  // useEffect(() => {
  //   apiTesting();
  // }, []);
  // const apiTesting = () => {
  //   fetchDataFromApi("/movie/popular").then((res) => {
  //     dispatch(getApiConfig(res));
  //   });
  // };


  const dispatch = useDispatch();
  const url = useSelector((state) => state.home.url);

  useEffect(() => {
    fetchImageUrl();
  }, []);
  const fetchImageUrl = () => {
    fetchDataFromApi("/configuration").then((res) => {
     const imageURL={
      backdrop:res.images.secure_base_url+"original",
      poster:res.images.secure_base_url+"original",
      profile:res.images.secure_base_url+"original"

     }
      dispatch(getApiConfig(imageURL));
    });
  };

  return (
    <>
      <BrowserRouter>
     
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/mediaType/:id" element={<Details />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="/search/:query" element={<SearchResult />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
