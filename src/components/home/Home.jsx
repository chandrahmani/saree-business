import { useEffect, useState } from 'react';
import './Home.css'
import axios from 'axios';
import Contact from '../contact/Contact';


const Home = () => {
    const [datas, setDatas] = useState([])

    console.log("cdf", datas)

    const getData = async () => {
        try {
            const { data: result } = await axios.get("data.json")

            console.log(result)
            setDatas(result)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <section>
                <div className='info-wrp'>
                    <h1>SMS SAREE</h1>
                    <p>Clothing Store in Muhammadabad Gohna
                        Opening at 9:00 AM</p>

                    <button>
                        GET QUOTS
                    </button>
                </div>

                <div className='img-wrp'>
                    <img src='https://lh3.googleusercontent.com/p/AF1QipPqURRTKeA-oJ8dpFDwLvhIyMn_6-xjvmzv5flw=w1080-h608-p-no-v0' />

                </div>
                <div className='upd'>
                    <p>UPDATE</p>
                </div>


                <div>
                    {datas.map((item, index) =>
                        <div key={index} className="grid-container">
                            <div className='grid-item'>
                                <img src={item.url} />

                                <div className='info-wrps'>
                                    <h2>{item.date}</h2>
                                    <h3>{item.silk}</h3>
                                    <h4>{item.price}</h4>
                                </div>
                            </div>
                        </div>

                    )}
                </div>

                <Contact />
            </section>
        </>
    )
}

export default Home;
