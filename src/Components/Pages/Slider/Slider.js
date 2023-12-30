const Slider = () => {
    return ( 
        <>
        <div className="row m-0 justify-content-center">
          <div className="col-12 " style={{height:"300px"}}>
            <div id="demo" className="carousel slide " data-bs-ride="carousel" style={{height:"300px"}}>
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#demo"
                  data-bs-slide-to="0"
                  className="active"
                ></button>
                <button
                  type="button"
                  data-bs-target="#demo"
                  data-bs-slide-to="1"
                ></button>
                {/* <button
                  type="button"
                  data-bs-target="#demo"
                  data-bs-slide-to="2"
                ></button> */}
              </div>
  
              <div className="carousel-inner ">
                <div className="carousel-item active">
                  <img
                    src={require("../Image/react-slider-1.jpg")}
                    alt="react"
                    className=" w-100  d-block "
                    style={{height:"400px"}}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../Image/react-slider-2.jpg")}
                    alt="react"
                    className="  d-block w-100"
                    style={{height:"400px"}}
                  />
                </div>
                {/* <div className="carousel-item">
                  <img
                    src={require("../Image/react-slider-3")}
                  />
                </div> */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#demo"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#demo"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </>
     );
}
 
export default Slider;