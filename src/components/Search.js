import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import SearchItem from './SearchItem';
import {debounce} from "lodash";


const SEARCH_QUERY = gql`
query SearchQuery($res: String!)
    {
        search {
            artists(query: $res, first: 50) {
                nodes {
                id
                name
                mbid
                }
                pageInfo{
                    hasNextPage
                    }
            }
        }
    }
`;

export class Search extends Component{
    constructor(props) {
        super(props)
        this.state = {
            search: '',
        }

        this.updateSearch = this.updateSearch.bind(this);
        this.submitSearch = this.submitSearch.bind(this);
    }
    
    
    updateSearch = (e) => {
        this.setState({
            search: e.target.value
        });
        localStorage.setItem('search', e.target.value);
    }

    // Debounce the search to prevent api flood
    submitSearch = debounce((e) => {
        e.preventDefault();
        var res = this.state;
        this.setState({ search: res });
    }, 1500)

    
    

    render() {
        // check if the list is empty
        const { search } = this.state;
        const searchStorage = localStorage.getItem('search');
        var { res } = "";
        if(searchStorage !== null){
        res = searchStorage;
        return (
            <Fragment>
                <h1 className="display-4 my-3">Artist: {res}</h1>
                <form onSubmit={ this.submitSearch }>
                    <div className="form-group">
                    <label>Search: </label>
                    <input className="form-control" type='text'
                    onChange={ this.updateSearch }
                    value={ search }
                    placeholder='Search'/>
                    </div>
                </form>
                {/* Doing the search including the variable 'res' in order to get the right results */}
                <Query query={SEARCH_QUERY} skip={!res} variables={{res}}>
                    {
                        ({ loading, error, data}) => {
                            if(loading) return <h4>Loading...</h4>
                            if(error) console.log(error);
                            console.log(data);
                            
                            return <Fragment>
                                <h4>Total results: {data.search.artists.nodes.length}</h4>
                                {
                                    data.search.artists.nodes.map(src => (
                                    <SearchItem key={src.mbid} src={src}/>
                                    ))
                                } 
                                
                            </Fragment>
                        }
                    }
                </Query>
            </Fragment>
        )
        }
        else{
            return <Fragment>
                <h1 className="display-4 my-3">Artist: {res}</h1>
                <form onSubmit={ this.submitSearch }>
                    <div className="form-group">
                    <label>Search: </label>
                    <input className="form-control" type='text'
                    onChange={ this.updateSearch }
                    value={ search }
                    placeholder='Search'/>
                    </div>
                </form>
                <h5>Empty List!</h5>
                <h5>Search something!</h5>
            </Fragment>
            }
    }
}

export default Search
