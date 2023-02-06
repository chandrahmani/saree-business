import Contact from '../contact/Contact';
import './Home.css'
const Home = () => {
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
                    <div className="grid-container">
                        <div className="grid-item">
                            <img src='https://media.istockphoto.com/id/93355119/photo/indian-saris.jpg?s=612x612&w=0&k=20&c=afmfiTJg0VAmIY6P_TJ_JYsTfGhUdevv18WXQRUZ8NQ=' />

                            <div className='info-wrps'>
                                <h2>Posted on 2022 Jun 8</h2>
                                <h3>Pure Kora silk saree</h3>
                                <h4>Rs 2000/</h4>
                            </div>
                        </div>
                        <div className="grid-item">
                            <img src='https://media.istockphoto.com/id/93355119/photo/indian-saris.jpg?s=612x612&w=0&k=20&c=afmfiTJg0VAmIY6P_TJ_JYsTfGhUdevv18WXQRUZ8NQ=' />

                            <div className='info-wrps'>
                                <h2>Posted on 2019 Jun 9</h2>
                                <h3>Pure Kora silk saree</h3>
                                <h4>Rs 1000/</h4>
                            </div>
                        </div>
                        <div className="grid-item">
                            <img src='https://media.istockphoto.com/id/1331734513/photo/view-of-indian-woman-fashion-and-tradtional-wear-sarees-in-shop-display.jpg?s=612x612&w=0&k=20&c=PxIU-OUQUZ-h7bBibATmXk_9HLK72w8j4a9wyAvppfk=' />

                            <div className='info-wrps'>
                                <h2>Posted on 2022 Jun 8</h2>
                                <h3>Pure Kora silk saree</h3>
                                <h4>Rs 3500/</h4>
                            </div>
                        </div>
                        <div className="grid-item">
                            <img src='https://media.istockphoto.com/id/938136656/photo/ethnic-clothing-of-indian-woman.jpg?s=612x612&w=0&k=20&c=oP7qST759ksXozUVKy6KelULa23cKzGrWv_1tP08UKg=' />

                            <div className='info-wrps'>
                                <h2>Posted on 2022 Jun 8</h2>
                                <h3>Pure Kora silk saree</h3>
                                <h4>Rs 1500/</h4>
                            </div>
                        </div>
                        <div className="grid-item">
                            <img src='https://media.istockphoto.com/id/177724641/photo/famous-saree-of-dhaka.jpg?s=612x612&w=0&k=20&c=B8fRtmxVEC8Odr70zxkBgO_t8UXme6iBqa9evBoQ9wA=' />

                            <div className='info-wrps'>
                                <h2>Posted on 2023 Jun 8</h2>
                                <h3>Pure Kora silk saree</h3>
                                <h4>Rs 3000/</h4>
                            </div>
                        </div>
                        <div className="grid-item">
                            <img src='https://media.istockphoto.com/id/172673345/photo/purple-and-green-sari.jpg?s=612x612&w=0&k=20&c=hgNNpCVpk_-vTyOG9yIQP3RB3on3duiaPt0soK-_l4Y=' />

                            <div className='info-wrps'>
                                <h2>Posted on 2022 Jun 8</h2>
                                <h3>Pure Kora silk saree</h3>
                                <h4>Rs 2500/</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <Contact />
            </section>
        </>
    )
}

export default Home;