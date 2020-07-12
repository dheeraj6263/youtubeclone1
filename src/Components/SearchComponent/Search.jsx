import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./Search.Styles.css"

class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
        }
    }
    handleChange = (e) => {
        this.setState({ term: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state.term)
        this.props.HeaderFormSubmit(this.state.term)
    }
    render() {

        return (
            <Fragment>
                <div className="searchBlock">

                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder="Search"
                            value={this.state.term}
                            onChange={this.handleChange} />
                    </form>
                    <button><FontAwesomeIcon icon={faSearch} /></button>
                </div>
            </Fragment>
        );
    }
}

export default SearchComponent;