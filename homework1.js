const forehead [{
    exercisesAmount: 3,
}
];
const eyes1 [{
    exercisesAmount: 3,
}   
];
const eyes2 [{
    exercisesAmount: 3,
} 
];
const nose [{
    exercisesAmount: 1,
} 
];
const cheeks [{
    exercisesAmount: 1,
}   
];
const cheekbones [{
    exercisesAmount: 2,
}
];
const lips [{
    exercisesAmount: 2,
}  
];
const neck [{
    exercisesAmount: 2,
}   
];
const lift [{
    exercisesAmount: 4,
} 
];

let day = 1;

//4 months access

if (day <= 7) {
    console.log(eyes1, nose, lift, neck);
} else if (day => 8 && day <= 20) {
    console.log(eyes1, eyes2, forehead, nose, cheeks, cheekbones, lift, neck);
} else if (day <= 121) {
    console.log(eyes1, eyes2, forehead, nose, cheeks, cheekbones, lips, lift, neck);
} else {
    console.log("Please make a payment for the further use of the face yoga exercises");
};

// 6 months access

if (day <= 7) {
    console.log(eyes1, nose, lift, neck);
} else if (day >= 8 && day <= 20) {
    console.log(eyes1, eyes2, forehead, nose, cheeks, cheekbones, lift, neck);
} else if (day <= 184) {
    console.log(eyes1, eyes2, forehead, nose, cheeks, cheekbones, lips, lift, neck);
} else {
    console.log("Please make a payment for the further use of the face yoga exercises");
};

// 12 months access

if (day <= 7) {
    console.log(eyes1, nose, lift, neck);
} else if (day >= 8 && day <= 20) {
    console.log(eyes1, eyes2, forehead, nose, cheeks, cheekbones, lift, neck);
} else if (day <= 366) {
    console.log(eyes1, eyes2, forehead, nose, cheeks, cheekbones, lips, lift, neck);
} else {
    console.log("Please make a payment for the further use of the face yoga exercises");
};

//free one week access

if (day <= 2) {
    console.log(eyes1, nose, lips);
} else if (day <= 4) {
    console.log(eyes1, forehead, nose, lips, lift);
} else if (day <= 7) {
    console.log(eyes1, forehead, nose, lips, lift, neck);    
} else {
    console.log("Make a payment to get an access to face yoga program!");
};

day <= 7 ? < eyes1 const forehead const nose const lips const lift const neck> : <"Make a payment to get an access to face yoga program!">;

    const part1 ["eyes1", "forehead", "lift"];
    const part2 ["nose", "cheeks", "lips"];
    const part3 ["eyes2", "cheekbones", "neck"];

    const week1 = [...part1];
    const week2 = [...part1, ...part2];
    const week3 = [...week2, ...part3];
