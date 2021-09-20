import React, {useState} from 'react';
import "../../assets/css/Usercreate.css";
import TopNav from "../../components/topnav/TopNav";
import Footer from "../../components/footer/footer";
import GoogleMapReact from 'google-map-react';
import './Storelocations.css';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Storelocations = () => {


    const defaultProps = {
        center: {
            lat: 7.091716105099873,
            lng: 79.99962546614545
        },
        zoom: 11
    };

    return (
        <>

            <>
                <div id="main" className="layout__content">
                    <TopNav/>
                    <div className="layout__content-main">
                        <h2 className="page-header">Store Locations</h2>
                        <div className="row">
                            <div className="col-8">
                                <div className="card full-height">
                                    <div style={{ height: '50vh', width: '100%' }}>
                                        <GoogleMapReact
                                            bootstrapURLKeys={{ key: "AIzaSyDi0kmH7TLYbwpGDGwCgOogc0rqHMAgb9I" }}
                                            defaultCenter={defaultProps.center}
                                            defaultZoom={defaultProps.zoom}
                                        >
                                            <AnyReactComponent
                                                lat={7.091716105099873}
                                                lng={79.99962546614545}
                                                text="My Marker"
                                            />
                                        </GoogleMapReact>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card full-height">
                                    <div className="branches">
                                    <h1>Branches</h1>
                                    <br/>
                                    <br/>
                                    <h2><i className='bx bxs-store'></i>Colombo</h2>
                                    <br/>
                                    <h3><i className='bx bx-current-location'></i>2, 69 Hyde Park Corner, Colombo 00200</h3>
                                    <br/>
                                    <h4><i className='bx bxs-mobile'></i>+94112683949</h4>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <h2><i className='bx bxs-store'></i>Kadawatha</h2>
                                    <br/>
                                    <h3><i className='bx bx-current-location'></i>172/6 Kandy Rd, Kadawatha</h3>
                                    <br/>
                                    <h4><i className='bx bxs-mobile'></i>+94114643615</h4>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        </>
    )
}
export default Storelocations;
