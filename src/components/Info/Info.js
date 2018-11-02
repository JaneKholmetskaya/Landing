import React, { Component } from 'react';

import "./Info.css";

import HeaderSection from '../HeaderSection/HeaderSection'
import "../../App.css";




class Info extends Component {

    render() {
        return (
            <div className="info" id = 'info'>
                <div className='container'>
                    <HeaderSection text={'Зачем мне это надо?'} />
                    <div className="info-list">
                        <div className="info-list-item">
                            <div className="info-list-item-num">1</div>
                            <p className="info-list-item-text">Диетолог разработает план питания, который безопасен для здоровья</p>
                        </div>
                        <div className="info-list-item">
                            <div className="info-list-item-num">2</div>
                            <p className="info-list-item-text">Тренер подберет эффективные упражнения, без ущерба для вашего организма</p>
                        </div>
                        <div className="info-list-item">
                            <div className="info-list-item-num">3</div>
                            <p className="info-list-item-text">Диетолог сможет контролировать изменения вашего внутреннего состояния (жировая и мышечная масса, водный баланс и тд)</p>
                        </div>
                        <div className="info-list-item">
                            <div className="info-list-item-num">4</div>
                            <p className="info-list-item-text">Тренер = мотивация к стабильным тренировкам, без пропусков</p>
                        </div>
                        <div className="info-list-item">
                            <div className="info-list-item-num">5</div>
                            <p className="info-list-item-text">Диетолог и тренер работают в команде. Максимально результативно и надежно.</p>
                        </div>
                        <div className="info-list-item">
                            <div className="info-list-item-num">6</div>
                            <p className="info-list-item-text">Наши специалисты сертифицированы, вы можете быть спокойны за свое здоровье</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Info;
