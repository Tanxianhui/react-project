
const initialState={
};

const home=(state=initialState,action)=>{
    switch(action.type){
        case "GET-MUSICLIST":{
            action.payload.songlist=action.payload.songlist.slice(0,10);
            state=action.payload;
            break;
        }
        default:{
            break;
        }
    }
    return state;
}

export default home;