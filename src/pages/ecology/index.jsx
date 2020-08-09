import React from 'react';
import ReactDOM from 'react-dom';
import enquire from 'enquire.js';
import Language from '../../components/language';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ecologyConfig from '../../../site_config/ecology';
import Memo from './memo';
import Card from './card';
import ImgItem from './img-item';
import { getLink } from '../../../utils';
import './index.scss';

class Ecology extends Language {
  constructor(props) {
    super(props);
    this.state = {
      vertical: true,
    };
  }

  componentDidMount() {
    enquire.register('screen and (max-width: 640px)', {
      match: () => {
        this.setState({
          vertical: false,
        });
      },
      unmatch: () => {
        this.setState({
          vertical: true,
        });
      },
      // Keep a empty destory to avoid triggering unmatch when unregister
      destroy: () => {},
    });
  }

  render() {
    const language = this.getLanguage();
    const dataSource = ecologyConfig[language];
    return (
      <div className="ecology-page">
        <Header
          type="normal"
          currentKey="ecology"
          logo={getLink('/img/dubbo_colorful.png')}
          language={language}
          onLanguageChange={this.onLanguageChange}
        />
        <Footer logo={getLink('/img/dubbo_gray.png')} />
      </div>
    );
  }
}

document.getElementById('root') && ReactDOM.render(<Ecology />, document.getElementById('root'));

export default Ecology;
