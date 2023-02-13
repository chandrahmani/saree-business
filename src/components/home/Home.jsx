import { useState } from 'react';
import './Home.css'
import Contact from '../contact/Contact';
import Product from '../product/Product';
import Modal from '../core/modal/Modal';
import { Div, Input } from '../core/modal';



const Home = () => {

    const [isShowForms, setIsShowForms] = useState(false);

    const [index, setIndex] = useState(0);


    const next = () => {
        if (index === index.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const prev = () => {
        if (index === 0) {
            setIndex(index.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

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
                    <img src='' />

                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://lh3.googleusercontent.com/p/AF1QipPqURRTKeA-oJ8dpFDwLvhIyMn_6-xjvmzv5flw=w1080-h608-p-no-v0" class="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://media.istockphoto.com/id/1331734513/photo/view-of-indian-woman-fashion-and-tradtional-wear-sarees-in-shop-display.jpg?s=612x612&w=0&k=20&c=PxIU-OUQUZ-h7bBibATmXk_9HLK72w8j4a9wyAvppfk=" class="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://media.istockphoto.com/id/177724641/photo/famous-saree-of-dhaka.jpg?s=612x612&w=0&k=20&c=B8fRtmxVEC8Odr70zxkBgO_t8UXme6iBqa9evBoQ9wA=" class="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" onClick={prev}>
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" onClick={next}>
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>

                    </div>
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

                    <Div size="0.5rem">
                        <Input size="0.45rem" type="text" placeholder='enter your name' />
                    </Div>


                </Modal>}
        </>
    )
}

export default Home;
