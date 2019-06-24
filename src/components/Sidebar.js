import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { connect } from 'react-redux'
import { removeItem} from './actions/cartActions';
import MyLogo from '../mylogo.png';
import {ToastsContainer, ToastsStore} from 'react-toasts';
import '../App.css';

class Sidebar extends Component {

    //to remove the item completely
    handleRemove = (id, name)=>{
        this.props.removeItem(id);
        ToastsStore.error(name+" has been removed from your favorites");
    }
    
    render() {
        let addedItems2 = this.props.items.length ?
        (  
            this.props.items.map(item=>{
                return(
                   
                   <div key={item.id}>
                        <div className="item-desc">
                            <a href={`/srcitem/${item.id}`} className="link"><span className="title">{item.name}</span></a>
                            <div className="add-remove">
                            </div>
                            <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id, item.name)}}>Remove</button>
                            <ToastsContainer store={ToastsStore}/>
                        </div>
                                
                    </div>
                     
                )
            })
        ):

         (
            <p>Nothing.</p>
         )
   return(
       <Menu>
        <div className="container">
            <div className="cart">
                <a href="http://kalogeropoulos.eu" target="_blank" rel="noopener noreferrer">
                    <img src={MyLogo} alt="Kalogeropoulos" style={{ width: 80, display: 'block', margin: 'auto' }}/>
                </a>
                <h5>Favorites</h5>
                <ul className="collection">
                    {addedItems2}
                </ul>
            </div>       
        </div>
        </Menu>
   )
}
}
const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Sidebar)