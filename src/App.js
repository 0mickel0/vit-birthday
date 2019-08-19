import React, { Component } from 'react';
import Loader from './Loader';

import gif from './assets/main2.gif';
import hint from './assets/mouse-hint.png';
import shakalBorder from './assets/shakalBorder.jpg';
import vitalyaBorder from './assets/vitalyaBorder.jpg';
import maskHead from './assets/maskHead.jpg';
import google1 from './assets/google1.jpg';
import google2 from './assets/google2.jpg';
import ctrlc from './assets/ctrlc.jpg';
import headToShakal from './assets/head.gif';
import head1 from './assets/head1.png';
import head2 from './assets/head2.png';
import head3 from './assets/head3.png';
import rogalik from './assets/rogalik.png';
import rogalicName from './assets/rogalicName.png';
import rogalikHead from './assets/rogalikHead.png';
import logoFinal from './assets/logoFinal.png';
import hui from './assets/hui.gif';
import vert1 from './assets/vert1.png';
import vert2 from './assets/vert2.png';
import vert3 from './assets/vert3.png';
import vert4 from './assets/vert4.png';
import vert5 from './assets/vert5.png';
import tshirt from './assets/tshirt.jpg';
import cup from './assets/cup.jpg';
import trusi from './assets/trusi.jpg';
import baloon from './assets/baloon.gif';
import ramires from './assets/ramires.mp3';
import baby from './assets/baby.gif';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };
  }

  audio = new Audio(ramires);

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: true });
      this.audio.play();
    }, 4000);
  }

  toggleMute = () => {
    this.audio.paused ? this.audio.play() : this.audio.pause();
  };

  render() {
    const { isLoading } = this.state;

    return (
      <div className={`app-container ${isLoading && 'isLoading'}`}>
        <Loader />

        <div className="App">
          <img
            src={baby}
            className="baby"
            alt="logo"
            onClick={this.toggleMute}
          />
          <div className="main-page">
            <div className="marquee">
              <div className="marquee__inner">
                <p className="marquee__line">
                  Логотип Виталику Рогалику <br /> Задача. Зашакалить логотип.
                </p>
                <p className="marquee__line">
                  Логотип Виталику Рогалику <br /> Задача. Зашакалить логотип.
                </p>
              </div>
            </div>
            <img src={gif} className="main-page__gif" alt="logo" />
            <img src={hint} className="main-page__scroll-hint" alt="logo" />
          </div>
          <div className="description-page">
            <img src={google1} className="full-width" alt="logo" />

            <div className="block">
              <img src={headToShakal} className="auto-width" alt="logo" />
            </div>

            <div className="block shake-animation-2">
              <img src={shakalBorder} className="auto-width" alt="logo" />
            </div>

            <div className="block">
              <img src={vitalyaBorder} className="auto-width" alt="logo" />
            </div>

            <div className="block glitch">
              <img src={maskHead} className="auto-width" alt="logo" />
            </div>

            <div className="block">
              <img src={vert1} className="threeToRow" alt="logo" />
              <img
                src={vert2}
                className="threeToRow shake-animation-4"
                alt="logo"
              />
            </div>

            <div className="block">
              <img
                src={vert3}
                className="auto-width shake-animation"
                alt="logo"
              />
              <img src={vert4} className="auto-width" alt="logo" />
              <img src={vert5} className="auto-width" alt="logo" />
            </div>

            <img src={google2} className="full-width" alt="logo" />

            <div className="block">
              <img src={ctrlc} className="auto-width" alt="logo" />
            </div>

            <div className="block">
              <img src={head1} className="threeToRow" alt="logo" />
              <img
                src={head2}
                className="threeToRow shake-animation-2"
                alt="logo"
              />
              <img
                src={head3}
                className="threeToRow shake-animation"
                alt="logo"
              />
            </div>

            <div className="block">
              <img src={hui} className="auto-width" alt="logo" />
            </div>

            <div className="block">
              <img
                src={rogalik}
                className="threeToRow shake-animation"
                alt="logo"
              />
              <img src={rogalicName} className="threeToRow" alt="logo" />
              <img src={rogalikHead} className="threeToRow" alt="logo" />
            </div>

            <div className="block">
              <img src={tshirt} className="threeToRow" alt="logo" />
              <img src={trusi} className="threeToRow" alt="logo" />
              <img src={cup} className="threeToRow" alt="logo" />
            </div>

            <div className="block shake-animation-3">
              <img src={logoFinal} className="oneToRow" alt="logo" />
            </div>
          </div>
          <div className="made-by">
            <div className="autors">
              <div className="autors-block">
                <div className="role">Работа с графикой</div>
                <div className="name">
                  <img src={baloon} className="balloon" alt="logo" />
                  <p data-text="Роман S Ворд" className="glitched-text">
                    Роман S Ворд
                  </p>
                </div>
              </div>
              <div className="autors-block">
                <div className="role">Арт-директор</div>
                <div className="name">
                  <img src={baloon} className="balloon" alt="logo" />
                  <p data-text="Михаїл Назаров" className="glitched-text">
                    Михаїл Назаров
                  </p>
                </div>
              </div>
              <div className="autors-block">
                <div className="role">Руководитель студии</div>
                <div className="name">
                  <img src={baloon} className="balloon" alt="logo" />
                  <p data-text="Ленид Rрош" className="glitched-text">
                    Ленид Rрош
                  </p>
                </div>
              </div>
            </div>
            <div className="date">
              <div className="date-release">Дата выпуска: 21.08.2019</div>
              <div
                className="date-counter glitched-text"
                data-text="Сделано за 1 день"
              >
                Сделано за 1 день
              </div>
            </div>
          </div>
          <div className="footer">
            <div>© 2018–2019 Студия Тимы Хабибулина</div>
            <div>mailbox@timaXabib.ru</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
