import React from 'react'

const Footer = () => {
    return (
        <div className="bg-secondary container-fluid fixed-bottom">
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <span title="Graphic design is my passion" className="mb-3 mb-md-0 text-secondary">Created by Donal Doherty</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3 col-2"><a href="https://github.com/DonalDoherty"><img className="img-fluid" src="github.png"></img></a></li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}

export default Footer