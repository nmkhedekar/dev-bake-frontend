import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import PopUp from "./PopUp"
import { useNavigate } from "react-router-dom";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useConsumeContext } from "../context/ContextFile";

import logo2 from "../assets/images/logo3.png";
import Input from "../components/Input";

import googlesearch from "../assets/images/googlesearch.png";

const Navbar = () => {
  const [animationParent] = useAutoAnimate()
  const { dark , setDark } = useConsumeContext();
  const [popUp , setPopUp] = useState(false)
  // console.log(loading);

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

    <nav class="navbar bg-body-tertiary">
      <div class="container">
        <div className="col-3">
        <a class="navbar-brand search-logo" href=""><img src={logo2} /></a>
        </div>
        <div className="col-9 result-search">

            <div className="input-search">
                {/* <input type="search" placeholder="Please enter text"/> */}
                <input
                    type="search"
                    className="form-control rounded-5"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    ref={navRef}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <a href=""><img src={googlesearch} /></a>
            </div>
            {/* <Input /> */}
        </div>
        
      </div>
    </nav>

  );
};

export default Navbar;
