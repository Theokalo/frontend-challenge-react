import { ADD_TO_CART,REMOVE_ITEM } from '../actions/action-types/cart-actions';
import {isEmpty, max} from "lodash";

const findMaxIndex = () => {
    let indexes = [];
    let maxIndex = -1;
    for (var key in localStorage){
        if (key.indexOf('addedItems') !== -1) {
            let num = parseInt(key.replace('addedItems', ''))
            if (isNaN) {
                indexes.push(num)
            }
            maxIndex = max(indexes)
        }
     }
     return maxIndex 
}
// return the added to favorites array
const giveAddedItems = () => {
    let item;
    let localToArray = [];
    let maxIndex = findMaxIndex();
    for (let i=0; i<=maxIndex; i++) {
        item = JSON.parse(localStorage.getItem(`addedItems${i}`)) || ''
        localToArray.push(item)
    } 
    localToArray = localToArray.filter(item => item)
    console.log(localToArray)
    return localToArray || []
}
// check if the item exists in favorites
const checkIfItemExists = () => {
    let checkAdded = {};
    let maxIndex = findMaxIndex();
    let itemFound = {};
    for (let i=0; i<=maxIndex; i++) {
        checkAdded = JSON.parse(localStorage.getItem(`addedItems${i}`)) || ''
        itemFound = checkAdded || {}
    }
    return itemFound || {}
}

const initState = {
    addedItems: giveAddedItems()
}


const cartReducer= (state = initState,action)=>{
    //INSIDE SrcItem COMPONENT
    if(action.type === ADD_TO_CART){
        let maxIndex = findMaxIndex();
        let itemExists = checkIfItemExists()
        if (!isEmpty(itemExists)) {
            if (action.id === itemExists.id) {
                return{
                    ...state
                }    
            }
            localStorage.setItem(`addedItems${maxIndex+1}`, JSON.stringify( { id: action.id, name: action.name}));
            return{
                ...state,
                addedItems: [...state.addedItems, { id: action.id, name: action.name}]
            }
        } else {
            localStorage.setItem(`addedItems${maxIndex+1}`, JSON.stringify( { id: action.id, name: action.name}));
            return{
                ...state,
                addedItems: [...state.addedItems, { id: action.id, name: action.name}]
            }
        }
       
    }
    //INSIDE Sidebar COMPONENT
    if(action.type === REMOVE_ITEM){
        let maxIndex = findMaxIndex();

        for (let i=0; i<=maxIndex; i++) {
            let o = JSON.parse(localStorage.getItem(`addedItems${i}`)) || {}
            if (o.id) {
                if (action.id === JSON.parse(localStorage.getItem(`addedItems${i}`)).id) {
                    localStorage.removeItem(`addedItems${i}`);
                    let y = state.addedItems.filter(item => item.id !== action.id) 
                        console.log(y)

                    return{
                        ...state,
                        addedItems: y
                    }
                }
            }
            console.log(state)

        }
    }
        return state
}

export default cartReducer