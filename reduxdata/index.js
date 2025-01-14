const redux = require('redux')


const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()


const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'


function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        
    }
}


// (previousState, action ) => newState

const initialCakeState = {
    numOfCakes: 20
}

const initialIceCreamState = {
    numOfIcecreams: 10
}



const cakeReducer = (state = initialCakeState , action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state, 
            // We are asking the reducer to first make a copy of state the after that u can proceed to update the state

            numOfCakes: state.numOfCakes - 1 
        }

        default: return state
    }

}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numOfIcecreams: state.numOfIcecreams - 1
        }

        default: return state
    }
}

// redux-library = redux store
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial State', store.getState())

const unsubscribe = store.subscribe(() => {  })

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
// Steps three

unsubscribe()





