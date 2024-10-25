import React from 'react'

const Review = () => {
  return (
    <section className="py-5">
        <div className="text-center"> 
            <h2 className="text-brighter">WHAT PEOPLE SAY ABOUT US</h2>
            <h1>CLIENTS REVIEWS</h1>
        </div>
    
        <div className="container">
            <div className="mt-5 row justify-content-between">
                <div className="col-sm-6 col-md-4 mx-auto text-center">
                    <img className="rounded-circle mb-4" loading="lazy" src="/p1.avif" alt="Profile" height="100" width="100" />
                    <p className="">
                        I've been coming to BarberShop for years, and I've always been impressed with the quality of service. The barbers are skilled and attentive, and they always know how to give me the perfect cut.
                    </p>
                    <p className="fw-bold text-brighter">LUNA JOHN - TORONTO</p>
                </div>
                <div className="col-sm-6 col-md-4 mx-auto text-center">
                    <img className="rounded-circle mb-4" loading="lazy" src="/p-2.avif" alt="Profile" height="100" width="100" />
                    <p className="">
                        I was hesitant to try a new barbershop, but I'm so glad I decided to give BarberShop a chance. The staff was friendly and welcoming, and the haircut I got was excellent.
                    </p>
                    <p className="fw-bold text-brighter">MARK SMITH - BRAMPTON</p>
                </div>
                <div className="col-sm-6 col-md-4 mx-auto text-center">
                    <img className="rounded-circle mb-4" loading="lazy" src="/p-3.avif" alt="Profile" height="100" width="100" />
                    <p className="">
                        I've been looking for a good barbershop in the area, and I finally found it in BarberShop. The atmosphere is relaxed and inviting, and the barbers are very skilled.
                    </p>
                    <p className="fw-bold text-brighter">MICHAEL WILSON - VAUGHAN</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Review
