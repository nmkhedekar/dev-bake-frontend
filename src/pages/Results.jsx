import React from "react";
import { useEffect, useState } from "react";
import { useConsumeContext } from "../context/ContextFile";
import Loading from "../components/Loading";
import Infos from "../components/Infos";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Images from "../components/Images";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import NavbarResult from "../components/NavbarResult";



import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";

const Results = () => {

  const dispatch = useDispatch()
  const loading = useSelector(state => state.loading)
  console.log(loading)
  
  const {
    // data,
    // setData,
    
    getImageFromApi,
    getDataFromApi,
    searchValue,
    img, setImg
  
  } = useConsumeContext();

  const [data, setData] = useState()
  
  useEffect(() => {
    getDataFromApi();
    getImageFromApi();
    const genImage = async () => {
      const response = await axios.post("http://44.211.141.200:5000/api/v1/search/generateImage", { text: searchValue });
      console.log("imgResp", response); 
      setData(response);   
    }
    genImage();
  }, []);



  console.log(img);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>{searchValue} - Google</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet> */}

      {/* <Navbar /> */}
      <NavbarResult />
      {/* <Input /> */}

      {/* <Images /> */}
      {/* <Infos data={data} setData={setData} img={img} setImg={setImg}/> */}

      {/* <div style={{ color: "gray" }}>
        {results?.length > 0 &&
          `Approxtimetly ${data.total} result has been found`}
        {results?.length == 0 && ` No data matches`}
      </div> */}

      {/* <Images image_results={image_results} /> */}

<div className="container">

  <div className="adds">
  <h3 className="">Check Out Our Sponsored</h3>
      <ul className="list-group">
        
                <li className="list-view">
                  <img src={img1} width="200px" height="200px"/>
                </li>
                <li className="list-view">
                  <img src={img2} width="200px" height="200px"/>
                </li>
                <li className="list-view">
                  <img src={img3} width="200px" height="200px"/>
                </li>
                <li className="list-view">
                  <img src={img4} width="200px" height="200px"/>
                </li>
      </ul>
  </div>
  <div className="result-section">
    <h3 className="result-head">Your Result</h3>
      <ul className="list-group">
        <>
          {
            data?.data?.result?.data?.map(data => {
              return(
                <>
                <li className="list-view">
                  <img src={data.url} width="200px" height="200px"/>
                </li>
                </>
              )
            })
          }
        </>
      {/* {results?.length > 0 &&  <h2>People Also Asked:</h2>}
     
        {answers?.map((item, index) => {
          return (
            <li className=" border-bottom  w-50 p-2" key={index}>
              {item}
            </li>
          );
        })}


        {results?.map((item, index) => {
          return (
            <div className="listType" key={index}>
              <h4 className="text-primary mt-4"> {item.title}</h4>
              <li className=" mt-2">
                <a target="_blank" href={item.link}>
                  {" "}
                  {item.link}
                </a>
              </li>
              <li className={` ${!dark ? "text-dark" : "text-white"}  mt-2 `}>
                {item.description.length > 30
                  ? item.description.substring(0, 60) + "..."
                  : item.description}
              </li>
            </div>
          );
        })} */}
      
      </ul>
      </div>
      {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Results;
