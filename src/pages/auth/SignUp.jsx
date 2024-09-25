import React from 'react'
import { Link } from 'react-router-dom'
import Preloader from '../../helper/Preloader'
import ScrollToTop from 'react-scroll-to-top'
import ColorInit from '../../helper/ColorInit'
import HeaderOne from '../../components/HeaderOne'
import FooterOne from '../../components/FooterOne'
import BottomFooter from '../../components/BottomFooter'

const SignUp = () => {


    return (

        <>
            {/* Preloader */}
            <Preloader />

            {/* ScrollToTop */}
            <ScrollToTop smooth color="#299E60" />

            {/* ColorInit */}
            <ColorInit color={false} />

            {/* HeaderOne */}
            <HeaderOne />
            <section className=" py-20">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 p-0'>
                            <img src="/assets/images/common/signIn.jpeg" alt='' width="100%"  style={{height:'100%'}}/>
                        </div>
                        <div className="col-md-6">
                           <div className="border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40">
                                <h3 className="text-xxl mb-0">Sign Up </h3>
                                <hr/>
                                <div className="mb-24">
                                    <label
                                        htmlFor="usernameTwo"
                                        className="text-neutral-900 text-lg mb-8 fw-medium"
                                    >
                                        Username <span className="text-danger">*</span>{" "}
                                    </label>
                                    <input
                                        type="text"
                                        className="common-input"
                                        id="usernameTwo"
                                        placeholder="Write a username"
                                    />
                                </div>
                                <div className="mb-24">
                                    <label
                                        htmlFor="emailTwo"
                                        className="text-neutral-900 text-lg mb-8 fw-medium"
                                    >
                                        Email address
                                        <span className="text-danger">*</span>{" "}
                                    </label>
                                    <input
                                        type="email"
                                        className="common-input"
                                        id="emailTwo"
                                        placeholder="Enter Email Address"
                                    />
                                </div>
                                <div className="mb-24">
                                    <label
                                        htmlFor="enter-password"
                                        className="text-neutral-900 text-lg mb-8 fw-medium"
                                    >
                                        Password
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="position-relative">
                                        <input
                                            type="password"
                                            className="common-input"
                                            id="enter-password"
                                            placeholder="Enter Password"
                                            defaultValue="password"
                                        />
                                        <span
                                            className="toggle-password position-absolute top-50 inset-inline-end-0 me-16 translate-middle-y cursor-pointer ph ph-eye-slash"
                                            id="#enter-password"
                                        />
                                    </div>
                                </div>
                                <div className="my-20">
                                    <p className="text-gray-500">
                                        <Link to="/sign-in" className="ms-4 text-main-600 text-decoration-underline">
                                           Sign In
                                        </Link>
                                    </p>
                                </div>
                                <div className="mt-10">
                                    <button type="submit" className="btn btn-main py-18 px-40">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* FooterOne */}
            <FooterOne />

            {/* BottomFooter */}
            <BottomFooter />
        </>

    )
}

export default SignUp