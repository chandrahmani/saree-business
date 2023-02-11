import { useState } from 'react';
import './Home.css'
import Contact from '../contact/Contact';
import Product from '../product/Product';
import Modal from '../core/modal/Modal';
import { Input } from '../core/modal';



const Home = () => {

    const [isShowForms, setIsShowForms] = useState(false);

    return (
        <>
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

            {isShowForms &&
                <Modal
                    closeBtn="Cancel"
                    confirmBtn="Update"
                    onClose={() => {
                        setIsShowForms(false);
                    }}>

                    <Input type="text" placeholder='enter your name' />
                </Modal>}
        </>
    )
}

export default Home;
