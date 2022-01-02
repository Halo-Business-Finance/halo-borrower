import {useState, useEffect} from 'react'
import Slider from "react-slick";
import axios from "axios";



function LoanData() {
  
  const [details, setDetails] = useState([]);

      //slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 5000,
    autoplaySpeed: 0,
    // cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  //slider end

    
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#ADADAD",
          color: "#ADADAD",
        }}
        onClick={onClick}
      />
    );
  }

  const headersone = {
    "Content-Type": "application/json",
  };

  const urlone = process.env.NEXT_PUBLIC_BASE_URL + "/api/loan-type/get-all";

  useEffect(() => {
    axios({
      method: "GET",
      url: urlone,
      headers: headersone,
    }).then(
      (respo) => {
        setDetails(respo.data.payload);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  
    return (
        <div>
             <section className="loans-types">
            {/* <div className="arrows">
							<img src="/images/left.png" />
						</div> */}

            <div>
              <Slider {...settings}>
                {details.map((datai) => {
                  const base_url =
                    process.env.NEXT_PUBLIC_BASE_URL + datai.thumbnail;
                  return (
                    <div className="loan-type-section" key={datai.id}>
                      <div className="loan-type">
                        <div className="loan-type-select">
                          <div className="loan-type-contain first" >
                            {/* value= {datai.id} */}
                            <img src={base_url} />
                          </div>
                          <p>{datai.loanTitle}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* {details.map((datai, dataname) => {
                  const base_url =
                    process.env.NEXT_PUBLIC_BASE_URL + datai.thumbnail;
                  return (
                    <div className="loan-type-section">
                      <div className="loan-type">
                        <div className="loan-type-select">
                          <div className="loan-type-contain first" key={datai.id}>
                            value= {datai.id}
                            <img src={base_url} />
                          </div>
                          <p>{datai.loanTitle}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {details.map((datai, dataname) => {
                  const base_url =
                    process.env.NEXT_PUBLIC_BASE_URL + datai.thumbnail;
                  return (
                    <div className="loan-type-section">
                      <div className="loan-type">
                        <div className="loan-type-select">
                          <div className="loan-type-contain first" key={datai.id}>
                            value= {datai.id}
                            <img src={base_url} />
                          </div>
                          <p>{datai.loanTitle}</p>
                        </div>
                      </div>
                    </div>
                  );
                })} */}
              </Slider>
            </div>

            {/* <div className="arrows right">
							<img src="/images/right.png" />
						</div> */}
          </section>
        </div>
    )
}

export default LoanData
