import React, { Component, Fragment } from 'react';


import './Header.Styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUserCircle, faVideo, faTh, faEllipsisV, faUser } from '@fortawesome/free-solid-svg-icons'
import SearchComponent from '../SearchComponent/Search';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {

        return (
            <Fragment>
                <section className="headerBlock">
                    <article>
                        <div className="logo">
                            <button><FontAwesomeIcon icon={faBars} /></button>
                            <a><img src="youtube_img.jfif" /></a>
                        </div>
                        <div className="search"><SearchComponent HeaderFormSubmit={this.props.FromAppFromSubmit} /></div>
                        <div className="menuBlock">
                            <a><FontAwesomeIcon icon={faVideo} /></a>
                            <a><FontAwesomeIcon icon={faTh} /></a>
                            <a><FontAwesomeIcon icon={faEllipsisV} /></a>
                            <a><FontAwesomeIcon icon={faUserCircle} />  SignIn</a>

                        </div>
                    </article>
                </section>
            </Fragment>
        );
    }
}

export default HeaderComponent;