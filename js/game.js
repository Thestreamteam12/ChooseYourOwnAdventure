// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "ghost.jpg",
    levels: {

        start: {
            message: "You find a dead body and with it there is gold",
            choices: [
                {
                    text: "Take the gold",
                    nextLevel: "body",
                },

                {
                    text: "call the cops",
                    nextLevel: "field",
                },
            ]
        },

        body: {
            background_image: "ghost2.jpeg",
            music: "98_Lost_Mine.mp3",
            message: "You're a horrible person, however, a ghost appears",
            choices: [
                {
                    text: "You talk to the ghost",
                    nextLevel: "start2",
                },
                
                {
                    text: "You run away screaming",
                    nextLevel: "start1"
                }
            ]
        },

        field: {
            message: "The cops come and accuse you of murder",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
    start1: {
        message: "You trip over a rock, hit your head, and die",
        choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                }
            ]
    },
    start2: {
        message: "Ghost tells you to murder the man who murdered him...it's his cousin, he wants you to murder him!",
        choices: [
                { 
                    text: "You leave the ghost and take his gold and the ghost is sad",
                    nextLevel: "start4",
                },
                
                {
                    text: "You accept the quest",
                    nextLevel: "start3",
                    
                }
            ]
    },
        start3: {
            message: "To be continued...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                }
                ]
    },
        start4: {
            message: "You'll never be a TRUE hero",
            choices: [
                {
                text: "Start over",
                nextLevel: "start",
                }
                ]
        }
    }
}
