import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch'; // fetch polyfill
import { getScrollTop, getLink } from '../../../utils';
import Header from '../../components/header';
import Button from '../../components/button';
import Footer from '../../components/footer';
import Language from '../../components/language';
import Item from './featureItem';
import homeConfig from '../../../site_config/home';
import './index.scss';

class Home extends Language {

  constructor(props) {
    super(props);
    this.state = {
      headerType: 'primary',
      starCount: 0,
      forkCount: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const scrollTop = getScrollTop();
      if (scrollTop > 66) {
        this.setState({
          headerType: 'normal',
        });
      } else {
        this.setState({
          headerType: 'primary',
        });
      }
    });
    // 写死协议，因github会做协议跳转，这种跳转会被Safari拦截
    fetch('https://api.github.com/repos/SJTU-IPADS/ServerlessBench')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          starCount: data.stargazers_count,
          forkCount: data.forks_count,
        });
      });
  }

  render() {
    const { starCount, forkCount } = this.state;
    const language = this.getLanguage();
    const dataSource = homeConfig[language];
    const { headerType } = this.state;
    const headerLogo = headerType === 'primary' ? `${window.rootPath}/img/serverlessbench-logo-white.png` : `${window.rootPath}/img/serverlessbench-logo.png`;
    return (
      <div className="home-page">
        <section className="top-section">
          <Header
            currentKey="home"
	    title="ServerlessBench"
            type={headerType}
            logo={headerLogo}
            language={language}
            onLanguageChange={this.onLanguageChange}
          />
          <div className="vertical-middle">
            <div className="product-name">
              <h2>{dataSource.brand.brandName}</h2>
              {/* <img src={`${window.rootPath}/img/incubating.svg`} /> */}
            </div>
            <p className="product-desc">{dataSource.brand.briefIntroduction}</p>
            <div className="button-area">
              <Button type="primary" link={getLink(dataSource.brand.getStartedButton.link)}>{dataSource.brand.getStartedButton.text}</Button>
              <Button type="normal" link={getLink(dataSource.brand.viewOnGithubButton.link)}>{dataSource.brand.viewOnGithubButton.text}</Button>
            </div>
              <div className="button-area">
                <Button type="primary" link={getLink(dataSource.brand.Dubbo3Button.link)}>{dataSource.brand.Dubbo3Button.text}</Button>
              </div>
          </div>
          <div className="animation animation1" />
          <div className="animation animation2" />
          <div className="animation animation3" />
          <div className="animation animation4" />
          <div className="animation animation5" />
        </section>
        <section className="introduction-section">
          <div className="introduction-body">
            <div className="introduction">
              <h3>{dataSource.introduction.title}</h3>
              <p>{dataSource.introduction.desc}</p>
            </div>
            <img src={`${window.rootPath}${dataSource.introduction.img}`} />
          </div>
        </section>
        <section className="feature-section">
          <h3>{dataSource.features.title}</h3>
          <ul>
          {
            dataSource.features.list.map((feature, i) => (
              <Item feature={feature} key={i} />
            ))
          }
          </ul>
        </section>
        <Footer logo={`${window.rootPath}/img/serverlessbench-logo.png`} />
      </div>
    );
  }
}

document.getElementById('root') && ReactDOM.render(<Home />, document.getElementById('root'));

export default Home;
