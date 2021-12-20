import React from "react";
import { Nav } from "react-bootstrap";
import { FaHome, FaUser, FaLaptopMedical } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
// import {} from "";

const styles = {
    header: {
        backgroundColor: '#8d968e',
        textAlign:"center"
    },
}


function Header () {




    return (
        <header style={styles.header}>
            <div className="row">
                <Nav className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link href=""><div className= "bi d-flex justify-content-center mx-auto mb-1"><FaHome style={{fontSize: "2.5rem", color: "black"}} /></div>
                            HOME
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href=""><div className= "bi d-flex justify-content-center mx-auto mb-1"><FaLaptopMedical style={{fontSize: "2.5rem", color: "black"}} /></div>
                            NEW POST
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href=""><div className= "bi d-flex justify-content-center mx-auto mb-1"><FaUser style={{fontSize: "2.5rem", color: "black"}} /></div>
                            ACCOUNT
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href=""><div className= "bi d-flex justify-content-center mx-auto mb-1"><FiLogOut style={{fontSize: "2.5rem", color: "black"}} /></div>
                            LOG OUT
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </header>
    )
}

export default Header;
