import React from 'react'
import { Button } from 'react-bootstrap';
import { FaAngleRight } from "react-icons/fa";

const BlogNews = () => {
  return (
    <section className="py-5 bg-dark text-white">
        <div className="text-center"> 
            <h2 className="text-brighter">OUR BLOG</h2>
            <h1>LATEST NEWS</h1>
        </div>
    
        <div className="mt-5 container">
            <div className="row g-3">
                <div className="col-sm-6 col-md-3">
                    <div className="card text-center text-bg-dark">
                        <img src="/c1.avif" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">MARLON MACDONALD</h5>
                            <p className="card-text">
                                There's a growing demand for beauty products that are free from animal-derived ingredients and testing.
                            </p>
                            <Button variant="warning">READ MORE</Button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-center text-bg-dark">
                        <img src="/c2.avif" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">JERRY BANKS</h5>
                            <p className="card-text">
                                Brands are increasingly focusing on using recyclable and biodegradable materials for their packaging.
                            </p>
                            <Button variant="warning">READ MORE</Button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-center text-bg-dark">
                        <img src="/c3.avif" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">JOHN BAILEY</h5>
                            <p className="card-text">
                                Consumers are more aware of the sourcing of ingredients and the working conditions in beauty product manufacturing.
                            </p>
                            <Button variant="warning">READ MORE</Button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-center text-bg-dark">
                        <img src="/c4.avif" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">DAVID BROOKS</h5>
                            <p className="card-text">
                                The beauty industry is making strides towards representing a wider range of skin tones, hair textures, and body types.
                            </p>
                            <Button variant="warning">READ MORE</Button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-center text-bg-dark">
                        <img src="/c1.avif" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">SAINT MOORE</h5>
                            <p className="card-text">
                                Brands are expanding their product offerings to cater to diverse needs and preferences.
                            </p>
                            <Button variant="warning">READ MORE</Button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-center text-bg-dark">
                        <img src="/c2.avif" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">JEFF BAILEY</h5>
                            <p className="card-text">
                                There's a shift towards celebrating beauty in all its forms, promoting self-acceptance and body positivity.
                            </p>
                            <Button variant="warning">READ MORE</Button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-center text-bg-dark">
                        <img src="/c3.avif" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">JEFFREY BILLS</h5>
                            <p className="card-text">
                                Technology is enabling the development of customized skincare products based on individual skin analysis and needs.
                            </p>
                            <Button variant="warning">READ MORE</Button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-center text-bg-dark">
                        <img src="/c4.avif" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">MICHAEL MOORE</h5>
                            <p className="card-text">
                                Devices like facial cleansing brushes, LED light therapy masks, and hair styling tools are becoming more advanced and accessible.
                            </p>
                            <Button variant="warning">READ MORE</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <nav className="d-flex justify-content-center mt-5 rounded-0" aria-label="...">
            <ul className="pagination pagination-md">
                <li className="page-item active" aria-current="page">
                    <span className="page-link">1</span>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        <FaAngleRight size={15} />
                    </a>
                </li>
            </ul>
        </nav>
    </section>
  )
}

export default BlogNews
