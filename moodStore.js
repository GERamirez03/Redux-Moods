const INITIAL_STATE = { 
    mood: "SLEEPY",
    payload: "(ᴗ˳ᴗ)"
};

function moodReducer(state = INITIAL_STATE, action) {
    return { ...state, mood: action.type, payload: action.payload };
}

const moodStore = Redux.createStore(moodReducer);