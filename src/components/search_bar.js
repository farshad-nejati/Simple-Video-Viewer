import React, { Component } from 'react';
// const SearchBar = () => {
//     return <input />; // React.createElement()
// };

class SearchBar extends Component {

    constructor(props) {
       super(props) ;

       this.state = { term: ''};
    }

    render() {
        //must return JSX
        // this.state.term = event.target.value // BAD!!!!
        return (
            <div className="search-bar">
                <input
                value = {this.state.term}
                 onChange={ event => this.onInputChange(event.target.value) } />
                {/* value of the input: {this.state.term} */}
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}


  
export default SearchBar;