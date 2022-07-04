import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

export default function Specials() {
    return (
        <div className="specials" id="specials">
            <h1 className="specials-header"> מבצעים </h1>

            <div className="specials-container">


                <MDBCol className="card-spe" style={{
                    maxWidth: "200px",
                    border: "solid 1px black",
                    boxShadow: "0 0 2px 2px"
                }}>
                    <MDBCard>
                        <MDBCardImage style={{
                            width: "200px",
                            height: "220px",
                        }} className="img-fluid" src={require('../pictures/nail-specials/0.png')}
                            waves />
                        <MDBCardBody>
                            <MDBCardTitle style={{
                                fontSize: "28px",
                                fontFamily: 'Horev'
                            }}>דוגמת שיש</MDBCardTitle>
                            <MDBCardText style={{
                                color: "brown",
                                fontWeight: "bold",
                                fontSize: "larger"
                            }}>60 ₪</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol className="card-spe" style={{
                    maxWidth: "200px",
                    border: "solid 1px black",
                    boxShadow: "0 0 2px 2px"
                }}>
                    <MDBCard>
                        <MDBCardImage style={{
                            width: "200px",
                            height: "220px",
                        }} className="img-fluid" src={require('../pictures/nail-specials/2.png')}
                            waves />
                        <MDBCardBody>
                            <MDBCardTitle style={{
                                fontSize: "28px",
                                fontFamily: 'Horev'
                            }}>ארגמן</MDBCardTitle>
                            <MDBCardText style={{
                                color: "brown",
                                fontWeight: "bold",
                                fontSize: "larger"
                            }}>70 ₪</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol className="card-spe" style={{
                    maxWidth: "200px",
                    border: "solid 1px black",
                    boxShadow: "0 0 2px 2px"
                }}>
                    <MDBCard>
                        <MDBCardImage style={{
                            width: "200px",
                            height: "220px",
                        }} className="img-fluid" src={require('../pictures/nail-specials/4.png')}
                            waves />
                        <MDBCardBody>
                            <MDBCardTitle style={{
                                fontSize: "28px",
                                fontFamily: 'Horev'
                            }}>סגול לילך</MDBCardTitle>
                            <MDBCardText style={{
                                color: "brown",
                                fontWeight: "bold",
                                fontSize: "larger"
                            }}>80 ₪</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol className="card-spe" style={{
                    maxWidth: "200px",
                    border: "solid 1px black",
                    boxShadow: "0 0 2px 2px"
                }}>
                    <MDBCard>
                        <MDBCardImage style={{
                            width: "200px",
                            height: "220px",
                        }} className="img-fluid" src={require('../pictures/nail-specials/5.png')}
                            waves />
                        <MDBCardBody>
                            <MDBCardTitle style={{
                                fontSize: "28px",
                                fontFamily: 'Horev'
                            }}>פנינה</MDBCardTitle>
                            <MDBCardText style={{
                                color: "brown",
                                fontWeight: "bold",
                                fontSize: "larger"
                            }}>50 ₪</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

            </div>



        </div>
    )
}
