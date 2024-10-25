import React from 'react'

const News = () => {
  return (
    <section className="py-5 bg-dark text-white">
        <div className="text-center"> 
            <h2 className="text-brighter">OUR BLOG</h2>
            <h1>LATEST NEWS</h1>
        </div>
    
        <div className="mt-5 container">
            <div className="row">
                <div className="col-sm-6 col-md-3">
                    <div className="card text-bg-dark">
                        <img src="/c1.avif" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">
                            Personalized skincare
                          </h5>
                          <p className="card-text">
                            Technology is enabling the development of customized skincare products based on individual skin analysis and needs.
                          </p>
                          <button type="button" className="btn text-brighter" data-bs-toggle="button">
                            READ MORE
                          </button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-bg-dark">
                        <img src="/c2.avif" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">
                            Smart beauty devices
                          </h5>
                          <p className="card-text">
                            Devices like facial cleansing brushes, LED light therapy masks, and hair styling tools are becoming more advanced and accessible.
                          </p>
                          <button type="button" className="btn text-brighter" data-bs-toggle="button">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-bg-dark">
                        <img src="/c3.avif" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">
                            Inclusive product lines
                          </h5>
                          <p className="card-text">
                            Brands are expanding their product offerings to cater to diverse needs and preferences.
                          </p>
                          <button type="button" className="btn text-brighter" data-bs-toggle="button">
                            READ MORE
                          </button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-bg-dark">
                        <img src="/c4.avif" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">
                            Representation
                          </h5>
                          <p className="card-text">
                            The beauty industry is making strides towards representing a wider range of skin tones, hair textures, and body types.
                          </p>
                          <button type="button" className="btn text-brighter" data-bs-toggle="button">
                            READ MORE
                          </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default News
