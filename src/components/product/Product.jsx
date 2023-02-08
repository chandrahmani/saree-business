import axios from "axios"
import { useEffect, useState } from "react"

const Product = () => {

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
        </>
    )
}

export default Product;