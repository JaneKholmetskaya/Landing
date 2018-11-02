import React, { Component } from 'react';
import mapIcon from "../../images/map.png";
import smartphone from "../../images/smartphone.png";
import letter from "../../images/letter.png";
import dumbbell from "../../images/dumbbell.png";
import "./Contacts.css";



import HeaderSection from '../HeaderSection/HeaderSection'
import "../../App.css";
import { Image } from 'react-bootstrap';



class Contacts extends Component {

    render() {
        return (
            <div className="contacts" id = 'contacts'>
                <div className='container'>
                    <HeaderSection text={'Наши контакты'} />
                    <div className="contacts-list">
                        <div className="contacts-list-item">
                            <div className="contacts-item-wrap">
                                <Image src={mapIcon} />
                                <h4 className="contacts-list-item-header">Приезжайте</h4>
                                <p className="contacts-list-item-text">г. Запорожье,</p>
                                <p className="contacts-list-item-text">ул. В. Лобановского, 21</p>
                            </div>
                        </div>
                        <div className="contacts-list-item">
                            <div className="contacts-item-wrap">
                                <Image src={smartphone} />
                                <h4 className="contacts-list-item-header">Звоните</h4>
                                <p className="contacts-list-item-text">+38 (061) 270-72-36</p>
                                <p className="contacts-list-item-text">+38 (095) 226-88-33</p>
                            </div>
                        </div>
                        <div className="contacts-list-item">
                            <div className="contacts-item-wrap">
                                <Image src={letter} />
                                <h4 className="contacts-list-item-header">Пишите</h4>
                                <a className="contacts-list-item-text" href="mailto:info@tonusclub.zp.ua">info@tonusclub.zp.ua</a>
                            </div>
                        </div>
                        <div className="contacts-list-item">
                            <div className="contacts-item-wrap">
                                <Image src={dumbbell} />
                                <h4 className="contacts-list-item-header">Занимайтесь</h4>
                                <p className="contacts-list-item-text">пн - пт: с 7:00 до 22:00</p>
                                <p className="contacts-list-item-text"> сб: с 8:00 до 18:00</p>
                                <p className="contacts-list-item-text">вс: выходной</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contacts-map"></div>
            </div>
        );
    }
}

export default Contacts;
