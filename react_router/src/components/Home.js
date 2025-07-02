import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container-fluid mx-auto">
            <aside className="position-relative overflow-hidden text-dark rounded bg-light mx-2 mx-sm-5 py-5">
                <div className="position-relative z-1 container pb-5 pt-4 py-sm-5 mx-auto px-3 px-sm-4 px-lg-5">
                    <div className="mx-auto mx-sm-0 text-center text-sm-end ms-sm-auto" style={{ maxWidth: '36rem', marginTop: '6rem' }}>
                        <h2 className="display-5 fw-bold">
                            Download Now
                            <span className="d-none d-sm-block display-6">Lorem Ipsum</span>
                        </h2>
                        <Link
                            className="btn btn-warning text-white d-inline-flex align-items-center px-4 py-3 fw-medium rounded-lg mt-4"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ pointerEvents: 'none' }}>
                    <img className="w-100" style={{ maxWidth: '24rem', marginTop: '5rem' }} src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                </div>
            </aside>
            <div className="d-grid justify-content-center align-items-center mt-5">
                <img className="w-100" style={{ maxWidth: '24rem' }} src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>
            <h1 className="text-center display-6 py-4 fw-medium">Lorem Ipsum Yojo</h1>
        </div>
    );
}
