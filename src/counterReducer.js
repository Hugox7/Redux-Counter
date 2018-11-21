const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD-ONE':
            return state + 1;
        case 'REMOVE-ONE':
            return state - 1;
        case 'ADD-TEN':
            return state + 10;
        case 'REMOVE-TEN':
            return state - 10;
        case 'RESET':
            return state = 0;
        case 'JACK':
            return "T'es mauvais Jack !";
        default:
            return state;
    }
 }

 export default counterReducer;