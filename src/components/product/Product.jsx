import axios from "axios";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Product = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoding] = useState(false);

  const getData = async () => {
    try {
      const { data: result } = await axios.get("data.json");

      console.log(result);
      setDatas(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoding(true);

    getData();

    setTimeout(() => {
      setLoding(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <ClipLoader
          color={"#fff"}
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loder"
        />
      ) : (
        <div>
          {datas.map((item, index) => (
            <div key={index} className="grid-container">
              <div className="grid-item">
                <img src={item.url} />

                <div className="info-wrps">
                  <h2>{item.date}</h2>
                  <h3>{item.silk}</h3>
                  <h4>{item.price}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Product;
