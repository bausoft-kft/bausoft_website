import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import 'tachyons';
import Bird from './Bird';
import WWlogo from '../logos/winwatt.gif'
import './BirdList.css';
import {Link} from 'react-router-dom'

const listHun = ['Épületfizika', 'Téli hőszükséglet', 'Nyári hőterhelés', 'Radiátor kiválasztás',
                'Egycsöves körök', 'Felület fűtés és hűtés', 'Hálózat hidraulika'];
const listEng = ['Building physics', 'Winter heat demand', 'Summer heat load', 'Radiator selection',
                'Single pipe loops', 'Surface heating and cooling', 'Network hydraulics'];
class BirdList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language :props.language | 'hun',
            width: 0, 
            height: 0,
            activeBird: '',
            activeComponents: [false, false, false, false, false, false, false],
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
     
      
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    handleBirdOn = (event) => {
        const name = event.currentTarget.id;
        this.setState({ activeBird: name });
        // eslint-disable-next-line default-case
        switch (name) {
            case 'cinege':
                this.setState({ activeComponents: [true, true, false, false, false, false, false] });
                break;
            case 'pinty':
                this.setState({ activeComponents: [true, true, false, true, false, false, false] });
                break;
            case 'fecske':
                this.setState({ activeComponents: [true, true, true, false, false, false, false] });
                break;
            case 'rigo':
                this.setState({ activeComponents: [true, true, false, true, true, true, false] });
                break;
            case 'siraly':
                this.setState({ activeComponents: [true, true, true, true, false, false, false] });
                break;
            case 'hollo':
                this.setState({ activeComponents: [true, true, true, true, true, true, false] });
                break;
            case 'kocsag':
                this.setState({ activeComponents: [true, true, false, true, true, true, true] });
                break;
            case 'golya':
                this.setState({ activeComponents: [true, true, true, true, true, true, true] });
                break;
        }
    }

    handleBirdOff = () => this.setState({ activeBird: '', activeComponents: [] });

    render() {
        return (
            <Grid container item xs={12}>
                <Grid item xs={12} className="pb3">
                    <img className="w-40" src={WWlogo} alt="WinWatt logo" />
                </Grid>
                <Link className="no-underline black" to={() => {if(this.state.width > 800) {return "/public/ww32.html"}}}>
                    <Grid container item xs={12} style={{ cursor: 'pointer' }}>
                        <Grid item xs={4} className="">
                            <Grid item xs={12} >
                                <ul className="tl components pl3">
                                    <li className={`${(this.state.activeComponents[0]) ? "active" : ""}`}>
                                        {`${(this.props.language === 'eng') ? listEng[0] : listHun[0]}`}</li>
                                    <li className={`${(this.state.activeComponents[1]) ? "active" : ""}`}>
                                        {`${(this.props.language === 'eng') ? listEng[1] : listHun[1]}`}</li>
                                    <li className={`${(this.state.activeComponents[2]) ? "active" : ""}`}>
                                        {`${(this.props.language === 'eng') ? listEng[2] : listHun[2]}`}</li>
                                    <li className={`${(this.state.activeComponents[3]) ? "active" : ""}`}>
                                        {`${(this.props.language === 'eng') ? listEng[3] : listHun[3]}`}</li>
                                    <li className={`${(this.state.activeComponents[4]) ? "active" : ""}`}>
                                        {`${(this.props.language === 'eng') ? listEng[4] : listHun[4]}`}</li>
                                    <li className={`${(this.state.activeComponents[5]) ? "active" : ""}`}>
                                        {`${(this.props.language === 'eng') ? listEng[5] : listHun[5]}`}</li>
                                    <li className={`${(this.state.activeComponents[6]) ? "active" : ""}`}>
                                        {`${(this.props.language === 'eng') ? listEng[6] : listHun[6]}`}</li>
                                </ul>
                            </Grid>
                        </Grid>
                        <Grid container item xs={8} className="pl3" alignItems="flex-start" justify="flex-end" direction="row">
                            <Grid item xs={5} sm={4} lg={3} id='cinege'
                                onMouseEnter={this.handleBirdOn}
                                onMouseLeave={this.handleBirdOff}>
                                <Bird name={'cinege'} />
                            </Grid><Grid item xs={5} sm={4} lg={3} id='pinty'
                                onMouseEnter={this.handleBirdOn}
                                onMouseLeave={this.handleBirdOff}>
                                <Bird name={'pinty'} />
                            </Grid><Grid item xs={5} sm={4} lg={3} id='fecske'
                                onMouseEnter={this.handleBirdOn}
                                onMouseLeave={this.handleBirdOff}>
                                <Bird name={'fecske'} />
                            </Grid><Grid item xs={5}  sm={4}  lg={3} id='rigo'
                                onMouseEnter={this.handleBirdOn}
                                onMouseLeave={this.handleBirdOff}>
                                <Bird name={'rigo'} />
                            </Grid><Grid item xs={5}  sm={4} lg={3} id='siraly'
                                onMouseEnter={this.handleBirdOn}
                                onMouseLeave={this.handleBirdOff}>
                                <Bird name={'siraly'} />
                            </Grid><Grid item xs={5}  sm={4} lg={3} id='hollo'
                                onMouseEnter={this.handleBirdOn}
                                onMouseLeave={this.handleBirdOff}>
                                <Bird name={'hollo'} />
                            </Grid><Grid item xs={5}  sm={4} lg={3} id='kocsag'
                                onMouseEnter={this.handleBirdOn}
                                onMouseLeave={this.handleBirdOff}>
                                <Bird name={'kocsag'} />
                            </Grid><Grid item xs={5}  sm={4} lg={3} id='golya'
                                onMouseEnter={this.handleBirdOn}
                                onMouseLeave={this.handleBirdOff}>
                                <Bird name={'golya'} />
                            </Grid>
                        </Grid >                    
                    </Grid >
                </Link>
            </Grid>
            
        );
    }
}

export default BirdList;