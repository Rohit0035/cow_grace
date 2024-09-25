import React from 'react'
import { Link } from 'react-router-dom'

const RecommendedOne = () => {
    return (
        <section className="recommended mt-40 mb-40">
            <div className="container container-lg">
                <div className="section-heading flex-between flex-wrap gap-16">
                    <h5 className="mb-0">Our Products</h5>
                    <ul className="nav common-tab nav-pills" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link active"
                                id="pills-all-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-all"
                                type="button"
                                role="tab"
                                aria-controls="pills-all"
                                aria-selected="true"
                            >
                                All
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-grocery-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-grocery"
                                type="button"
                                role="tab"
                                aria-controls="pills-grocery"
                                aria-selected="false"
                            >
                                A2 Ghee
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-fruits-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-fruits"
                                type="button"
                                role="tab"
                                aria-controls="pills-fruits"
                                aria-selected="false"
                            >
                                A2 Milk
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-juices-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-juices"
                                type="button"
                                role="tab"
                                aria-controls="pills-juices"
                                aria-selected="false"
                            >
                                Cold Pressed Oils
                            </button>
                        </li>
                        {/* <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-vegetables-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-vegetables"
                                type="button"
                                role="tab"
                                aria-controls="pills-vegetables"
                                aria-selected="false"
                            >
                                Vegetables
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-snacks-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-snacks"
                                type="button"
                                role="tab"
                                aria-controls="pills-snacks"
                                aria-selected="false"
                            >
                                Snacks
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-organic-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-organic"
                                type="button"
                                role="tab"
                                aria-controls="pills-organic"
                                aria-selected="false"
                            >
                                Organic Foods
                            </button>
                        </li> */}
                    </ul>
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="pills-all"
                        role="tabpanel"
                        aria-labelledby="pills-all-tab"
                        tabIndex={0}
                    >
                        <div className="row g-12">
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/common/ghee-1.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                              A2 Gir Cow Ghee – 250ml
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹525.00
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹650.00
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/common/ghee-2.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                               A2 Gir Cow Ghee – 500ml
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹900.00
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                   ₹1,250.00
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/common/ghee-3.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                               A2 Gir Cow Ghee
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹525.00
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                   ₹1,799.00
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
                                        New
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/common/ghee-4.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                               A2 Gir Cow Ghee – 1 Litre
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                     ₹2,400.00
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                   ₹2,400.00
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/common/milk.jpg" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                               A2 Gir Cow Milk – 250ml
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹25.00
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹30.00
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/common/milk.jpg" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                              A2 Gir Cow Milk – 500ml
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹50.00
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹60.00
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/common/milk.jpg" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                               A2 Gir Cow Milk – 750ml
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                     ₹80.00
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹60.00
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
                                        Best Sale
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/common/milk.jpg" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                               A2 Gir Cow Milk -1 Litre
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                   ₹100.00
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                   ₹120.00
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/common/oil-1.jpg" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                 Coconut Oil – Cold Pressed
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹650.00
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹750.00
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/common/oil-2.jpg" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Groundnut Oil – Cold Pressed
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹449.00
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                     ₹550.00
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/common/oil-3.jpg" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Safflower Oil – Cold Pressed
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                   ₹450.00
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                   ₹500.00
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
                                        Best Sale
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/common/oil-4.jpg" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Sesame Oil – Cold Pressed
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹600.00
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹650.00
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img11.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Lucerne Yogurt, Lowfat, Strawberry
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img12.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Nature Valley Whole Grain Oats and Honey Protein
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img13.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img14.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                        New
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img15.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img16.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Good &amp; Gather Farmed Atlantic Salmon
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img17.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                        New
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img18.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Tropicana 100% Juice, Orange, No Pulp
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-grocery"
                        role="tabpanel"
                        aria-labelledby="pills-grocery-tab"
                        tabIndex={0}
                    >
                        <div className="row g-12">
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/common/ghee-1.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                              A2 Gir Cow Ghee – 250ml
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹525.00
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹650.00
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/common/ghee-2.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                               A2 Gir Cow Ghee – 500ml
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹900.00
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                   ₹1,250.00
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/common/ghee-3.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                               A2 Gir Cow Ghee
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹525.00
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                   ₹1,799.00
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
                                        New
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/common/ghee-4.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                               A2 Gir Cow Ghee – 1 Litre
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                     ₹2,400.00
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                   ₹2,400.00
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img12.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Nature Valley Whole Grain Oats and Honey Protein
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img13.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img14.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                        New
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img15.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img16.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Good &amp; Gather Farmed Atlantic Salmon
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img17.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                        New
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img18.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Tropicana 100% Juice, Orange, No Pulp
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-fruits"
                        role="tabpanel"
                        aria-labelledby="pills-fruits-tab"
                        tabIndex={0}
                    >
                        <div className="row g-12">
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/common/milk.jpg" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                               A2 Gir Cow Milk – 250ml
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹25.00
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹30.00
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/common/milk.jpg" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                              A2 Gir Cow Milk – 500ml
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹50.00
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹60.00
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/common/milk.jpg" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                               A2 Gir Cow Milk – 750ml
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                     ₹80.00
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹60.00
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
                                        Best Sale
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/common/milk.jpg" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                               A2 Gir Cow Milk -1 Litre
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                   ₹100.00
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                   ₹120.00
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img11.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Lucerne Yogurt, Lowfat, Strawberry
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img12.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Nature Valley Whole Grain Oats and Honey Protein
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img13.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img14.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                        New
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img15.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img16.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Good &amp; Gather Farmed Atlantic Salmon
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img17.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                        New
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img18.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Tropicana 100% Juice, Orange, No Pulp
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-juices"
                        role="tabpanel"
                        aria-labelledby="pills-juices-tab"
                        tabIndex={0}
                    >
                        <div className="row g-12">
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/common/oil-1.jpg" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                 Coconut Oil – Cold Pressed
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹650.00
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹750.00
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/common/oil-2.jpg" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Groundnut Oil – Cold Pressed
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹449.00
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                     ₹550.00
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/common/oil-3.jpg" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Safflower Oil – Cold Pressed
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                   ₹450.00
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                   ₹500.00
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
                                        Best Sale
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/common/oil-4.jpg" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Sesame Oil – Cold Pressed
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹600.00
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹650.00
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img11.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Lucerne Yogurt, Lowfat, Strawberry
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img12.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Nature Valley Whole Grain Oats and Honey Protein
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img13.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img14.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                        New
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img15.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img16.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Good &amp; Gather Farmed Atlantic Salmon
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img17.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                        New
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img18.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Tropicana 100% Juice, Orange, No Pulp
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    {/* <div
                        className="tab-pane fade"
                        id="pills-vegetables"
                        role="tabpanel"
                        aria-labelledby="pills-vegetables-tab"
                        tabIndex={0}
                    >
                        <div className="row g-12">
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img8.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Marcel's Modern Pantry Almond Unsweetened
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img9.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                O Organics Milk, Whole, Vitamin D
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
                                        Best Sale
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img10.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Whole Grains and Seeds Organic Bread
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img11.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Lucerne Yogurt, Lowfat, Strawberry
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img12.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Nature Valley Whole Grain Oats and Honey Protein
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img13.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img14.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                        New
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img15.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img16.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Good &amp; Gather Farmed Atlantic Salmon
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img17.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                        New
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img18.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Tropicana 100% Juice, Orange, No Pulp
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-snacks"
                        role="tabpanel"
                        aria-labelledby="pills-snacks-tab"
                        tabIndex={0}
                    >
                        <div className="row g-12">
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img8.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Marcel's Modern Pantry Almond Unsweetened
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img9.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                O Organics Milk, Whole, Vitamin D
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
                                        Best Sale
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img10.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Whole Grains and Seeds Organic Bread
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img11.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Lucerne Yogurt, Lowfat, Strawberry
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img12.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Nature Valley Whole Grain Oats and Honey Protein
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img13.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img14.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                        New
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img15.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img16.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Good &amp; Gather Farmed Atlantic Salmon
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img17.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                        New
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img18.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Tropicana 100% Juice, Orange, No Pulp
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-organic"
                        role="tabpanel"
                        aria-labelledby="pills-organic-tab"
                        tabIndex={0}
                    >
                        <div className="row g-12">
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img8.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Marcel's Modern Pantry Almond Unsweetened
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img9.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                O Organics Milk, Whole, Vitamin D
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
                                        Best Sale
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img10.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Whole Grains and Seeds Organic Bread
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img11.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Lucerne Yogurt, Lowfat, Strawberry
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img12.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Nature Valley Whole Grain Oats and Honey Protein
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img13.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img14.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                        New
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img15.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img16.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Good &amp; Gather Farmed Atlantic Salmon
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img17.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                        New
                                    </span>
                                    <Link
                                        to="/"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img18.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/" className="link text-line-2">
                                                Tropicana 100% Juice, Orange, No Pulp
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                 By Grace of Cows.
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>

    )
}

export default RecommendedOne