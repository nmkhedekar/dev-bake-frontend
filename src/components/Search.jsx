import { Button } from "@mui/material";
import React, { useRef, useEffect } from "react";
import { useConsumeContext } from "../context/ContextFile";
import googleImage from "../utils/google.webp";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { useNavigate } from "react-router-dom";
import Input from "./Input";

import logo2 from "../assets/images/logo3.png";


const Search = () => {
    const navigate = useNavigate()
  const {
    data,
    setData,
    loading,
    setLoading,
    getDataFromApi,
    searchValue,
    setSearchValue,
  } = useConsumeContext();
 
  const navRef = React.useRef(null);

  const myRef = useRef();
  // console.log(searchValue);

  var verbs, nouns, adjectives, adverbs, style;
  nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
            verbs = ["kicked", "ran", "flew", "dodged", "walk", "rolled", "moved", "breathed", "slept"];
            adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "slimy"];
            adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
style = ["digital art", "depicted as an explosion of a nebula", "oil painting", "Van Gogh style", "Cartoon", "Anime", "painting"];

  function randGen() {
    return Math.floor(Math.random() * 5);
  }

 

  const sentence = (e) => {
    
    var rand1 = Math.floor(Math.random() * 10);
    var rand2 = Math.floor(Math.random() * 10);
    var rand3 = Math.floor(Math.random() * 10);
    var rand4 = Math.floor(Math.random() * 10);
    var rand5 = Math.floor(Math.random() * 10);
    var rand6 = Math.floor(Math.random() * 10);
    //                var randCol = [rand1,rand2,rand3,rand4,rand5];
    //                var i = randGen();
    var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + "," + " " + style[rand6] + ".";

    // document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;";

    // alert(content);

    navRef.current.value=content;
    var searchValue = navRef.current.value;

    setSearchValue(content);

    

  };
  

  return (
    <form  style={{height : "75vh" , marginTop : "7rem"}}>
      <div className="d-flex justify-content-center mt-5 search-logo">
        {/* <img src={googleImage} alt="" width="300px" /> */}
        <img src={logo2} alt="" width="300px" />
      </div>

      <div className="search-input mob-wid">
        <div className="input-group mb-3 w-50 mt-3 m-auto">
          <input
            type="search"
            className="form-control rounded-5"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            ref={navRef}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        {/* <Input  searchValue={searchValue} setSearchValue={setSearchValue} /> */}


        {/* <input ref={navRef} onChange={(e) => { navRef.current.value = e.target.value }} /> */}

        <div className="d-flex gap-3 justify-content-center mob-flex">
          <Button 
          onClick={() =>  navigate("/results")}
          type="submit"  variant="contained" className="markerdog">Paint it makerdog</Button>

          
          <Button  variant="contained" className="crazy markerdog" onClick={sentence} >
          Do something Crazy
          </Button>
          
        </div>

                    {/* <div>
                      <button onClick={sentence} >Refresh<i class="fa fa-refresh" aria-hidden="true"></i></button>
                    </div>
                    <div className="container">
                      <p id="sentence"></p>
                    </div> */}

      </div>
    </form>
  );
};

export default Search;
