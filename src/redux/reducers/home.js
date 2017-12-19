
const initialState={
};

const home=(state=initialState,action)=>{
    switch(action.type){
        case "GET-MUSICLIST":{
            state=action.payload
            break;
        }
        default:{
            break;
        }
    }
    console.log(state)
    return state;
}

export default home;