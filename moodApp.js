window.onload = function() {
    const faceElement = document.querySelector("p");

    document.querySelector("#happy")
        .addEventListener("click", function() {
            moodStore.dispatch({ type: "HAPPY", payload: "(^ω^)" });
            const { mood, payload } = moodStore.getState();
            console.log(mood);
            faceElement.innerText = payload;
    });

    document.querySelector("#sad")
        .addEventListener("click", function() {
            moodStore.dispatch({ type: "SAD", payload: "(T_T)" });
            const { mood, payload } = moodStore.getState();
            console.log(mood);
            faceElement.innerText = payload;
    });

    document.querySelector("#angry")
        .addEventListener("click", function() {
            moodStore.dispatch({ type: "ANGRY", payload: "(ಠ_ಠ)" });
            const { mood, payload } = moodStore.getState();
            console.log(mood);
            faceElement.innerText = payload;
    });

    document.querySelector("#confused")
        .addEventListener("click", function() {
            moodStore.dispatch({ type: "CONFUSED", payload: "(@_@)" });
            const { mood, payload } = moodStore.getState();
            console.log(mood);
            faceElement.innerText = payload;
    });
}