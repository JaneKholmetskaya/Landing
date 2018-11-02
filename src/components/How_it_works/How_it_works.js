import React, { Component } from 'react';
import city from "../../images/city.png";
import beach from "../../images/beach.png";
import dietolog from "../../images/dietolog.png";
import program from "../../images/program.png";
import training from "../../images/training.png";
import control from "../../images/control.png";
import success from "../../images/success.png";
import "./How_it_works.css";



import HeaderSection from '../HeaderSection/HeaderSection'
import "../../App.css";
import { Image } from 'react-bootstrap';



class HowItWorks extends Component {

	render() {
		return (
			<div className = 'container' id = 'how_it_works'>
                <HeaderSection text = {'Как это работает?'}/>			
				<div className = 'how-content'>
					<Image src = {city} className = 'how-content-top'/>
					<div className="how-content-list">
						<div className = 'how-content-item'>
							<Image src = {dietolog} />
							<p className = 'how-content-item-text'>Диагностика и разработка индивидуальной программы питания</p>
						</div>
						<div className = 'how-content-item'>
							<Image src = {program} />
							<p className = 'how-content-item-text'>Тестирование и построение личного плана тренировок</p>
						</div>
						<div className = 'how-content-item'>
							<Image src = {training} />
							<p className = 'how-content-item-text'>Занятия с персональным тренером</p>
						</div>
						<div className = 'how-content-item'>
							<Image src = {control} />
							<p className = 'how-content-item-text'>Первые ощутимые результаты через 30 дней!</p>
						</div>
						<div className = 'how-content-item'>
							<Image src = {success} />
							<p className = 'how-content-item-text'>Успех!</p>
							<p>Здоровое тело без лишних кг</p>
						</div>
					</div>
					<Image src = {beach} className = 'how-content-bottom' />
				</div>	             
			</div>
		);
	}
}

export default HowItWorks;
