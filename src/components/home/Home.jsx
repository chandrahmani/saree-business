import { useEffect, useState } from 'react';
import './Home.css'
import Contact from '../contact/Contact';
import Product from '../product/Product';
import Modal from '../core/modal/Modal';
import { Div, Input } from '../core/modal';
import { ClipLoader } from 'react-spinners';



const Home = () => {

    const [isShowForms, setIsShowForms] = useState(false);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 4000)

    }, [])

    return (
        <>

            {
                loading ?
                    <ClipLoader
                        color={"#000000"}
                        loading={loading}
                        size={100}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                        className='loder'
                    />
                    :
                    <section>
                        <div className='info-wrp'>
                            <h1>SMS SAREE</h1>
                            <p>Clothing Store in Muhammadabad Gohna
                                Opening at 9:00 AM</p>

                            <button onClick={() => setIsShowForms(true)}>
                                GET QUOTS
                            </button>
                        </div>

                        <div className='img-wrp'>
                            <img src='https://lh3.googleusercontent.com/p/AF1QipPqURRTKeA-oJ8dpFDwLvhIyMn_6-xjvmzv5flw=w1080-h608-p-no-v0' />
                        </div>
                        <div className='upd'>
                            <p>UPDATE</p>
                        </div>

                        <Product />

                        <Contact />


                    </section>
            }

            {isShowForms &&
                <Modal
                    closeBtn="Cancel"
                    confirmBtn="Update"
                    onClose={() => {
                        setIsShowForms(false);
                    }}>

                    <Div size="0.5rem">
                        <Input size="0.45rem" type="text" placeholder='enter your name' />
                    </Div>


                </Modal>}
        </>
    )
}

export default Home;
