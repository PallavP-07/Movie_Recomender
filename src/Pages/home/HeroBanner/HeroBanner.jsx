import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import { useSelector } from "react-redux";
import ImageLazyLoad from "../../../Components/LazyLoad/ImageLazyLoad";
import ContentWrapper from "../../../Components/contentWrapper/Wrapper";
const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const imageURL = useSelector((state) => state.home.url);
  const { data, loding } = useFetch("/movie/popular");
  

  useEffect(() => {
    const bg =
      imageURL.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);
  console.log(background);
  const searchQueryHandle = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <>
    <div className="heroBanner">
    <ContentWrapper>
        {!loding && (
          <div className="backdrop-img">
            <ImageLazyLoad src={background} />
          </div>
        )}
         <div className="opacity-layer"></div>
        <div className="heroBannerContent">
          <h2 className="title">Wellcome</h2>
          <p className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <div className="searchInput">
          <input
            type="text"
            placeholder="Search for a movie or tv show.."
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={searchQueryHandle}
          />
          <button>Search</button>
        </div>
        </div>
     
    </ContentWrapper>
      </div>

      
    </>
  );
};

export default HeroBanner;
