import { v4 } from "uuid";


let initState = [
    // {
    //     id: v4(),
    //     cartNum: '1111111111111111',
    //     cartNam: 'mahdiiiii',
    //     cartDate: '1111',
    //     cartCvv: '111',
    //     cartColor: 'tomato',
    // },
    // {
    //     id: v4(),
    //     cartNum: '2222222222222222',
    //     cartNam: 'Nimaaaaaaa',
    //     cartDate: '2222',
    //     cartCvv: '222',
    //     cartColor: 'teal',
    // },
    // {
    //     id: v4(),
    //     cartNum: '3333333333333333',
    //     cartNam: 'hasannnnnnnnn',
    //     cartDate: '3333',
    //     cartCvv: '333',
    //     cartColor: 'gray',
    // },
]

export const ReducerCartInfo = (state = initState, action) => {

    switch (action.type) {
        case 'ADD':
            return [...state, action.payload]
            break;

        case 'DELETE':
            let newCarts = state.filter(cart=>cart.id != action.payload)
            return newCarts
            break;

        default:
            return state
            break;
    }

}

