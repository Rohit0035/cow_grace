import React from 'react'
import { Link } from 'react-router-dom'

const PromotionalOne = () => {
    return (
        <section className="promotional-banner pt-20">
            <div className="container container-lg">
                <div className="row gy-4">
                    {/* <div className="col-xl-3 col-sm-6 col-xs-6">
                        <div className="promotional-banner-item position-relative rounded-24 overflow-hidden z-1">
                            <img
                                src="assets/images/thumbs/promotional-banner-img1.png"
                                alt=""
                                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
                            />
                            <div className="promotional-banner-item__content">
                                <h6 className="promotional-banner-item__title text-32">
                                    Everyday Fresh Meat
                                </h6>
                                <Link
                                    to="/"
                                    className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24"
                                >
                                    Shop Now
                                    <span className="icon text-xl d-flex">
                                        <i className="ph ph-arrow-right" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-xl-4 col-sm-6 col-xs-6">
                        <div className="promotional-banner-item position-relative rounded-24 overflow-hidden z-1">
                            <img
                                src="assets/images/thumbs/promotional-banner-img2.png"
                                alt=""
                                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
                            />
                            <div className="promotional-banner-item__content">
                                <h6 className="promotional-banner-item__title text-32">
                                    Daily Fresh A2 Ghee
                                </h6>
                                <Link
                                    to="/"
                                    className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24"
                                >
                                    Shop Now
                                    <span className="icon text-xl d-flex">
                                        <i className="ph ph-arrow-right" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 col-xs-6">
                        <div className="promotional-banner-item position-relative rounded-24 overflow-hidden z-1">
                            <img
                                src="assets/images/thumbs/promotional-banner-img3.png"
                                alt=""
                                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
                            />
                            <div className="promotional-banner-item__content">
                                <h6 className="promotional-banner-item__title text-32">
                                    Everyday Fresh A2 Milk
                                </h6>
                                <Link
                                    to="/"
                                    className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24"
                                >
                                    Shop Now
                                    <span className="icon text-xl d-flex">
                                        <i className="ph ph-arrow-right" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 col-xs-6">
                        <div className="promotional-banner-item position-relative rounded-24 overflow-hidden z-1">
                            <img
                                src="assets/images/thumbs/promotional-banner-img4.png"
                                alt=""
                                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
                            />
                            <div className="promotional-banner-item__content">
                                <h6 className="promotional-banner-item__title text-32">
                                    Fresh Cold Pressed Oils
                                </h6>
                                <Link
                                    to="/"
                                    className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24"
                                >
                                    Shop Now
                                    <span className="icon text-xl d-flex">
                                        <i className="ph ph-arrow-right" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default PromotionalOne