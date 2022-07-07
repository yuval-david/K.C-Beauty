import React from 'react'

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <h1 className="contact-header"> צרו קשר </h1>
            <div className="contact-content">
                <table className="contact-details">
                    <tbody>
                        <tr>
                            <td className="td-head"> טלפון: </td>
                            <td> 03-1522834 </td>
                        </tr>
                        <tr>
                            <td className="td-head"> דוא''ל: </td>
                            <td> kcBeauty@gmail.com </td>
                        </tr>
                    </tbody>
                </table>

                <div className='icons-container'>
                    <a className="a-icons" href="https://www.instagram.com/k.c_beauty1/" target="post"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    <a className="a-icons" href="https://www.facebook.com/Kc-beauty-101292178063880" target="post"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                </div>


            </div>


        </div>
    )
}
