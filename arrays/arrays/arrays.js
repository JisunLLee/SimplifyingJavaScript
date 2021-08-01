const team = [
    'Joe',
    'Dyan',
    'Bea',
    'Theo',
];

function alphabetizeTeam(team) {
    return [...team].sort();
}


const staff = [{
        name : 'wesley',
        position: 'musician',
    },
    {
        name : 'Davis',
        position : 'enginner',
    },
];

function getMusicians(staff) {
    return staff.filter(member => member.position === 'musician');
}

const game1 = {
    player: 'Jim Jonas',
    hits: 2,
    runs: 1,
    errors: 0
};
const game2 = {
    player: 'Jim Jonas',
    hits: 3,
    runs: 0,
    errors: 1    
}

const tatal = {};
const stats = Object.keys(game1);
for (let i = 0; i < stats.length; i++) {
    const stat = stats[i];
    if (stat !== 'player'){
        total[stat] = game1[stat] + game2[stat];
    }
} 
const dog = {
    name : 'Don',
    color : 'black',
}

dog.name;
// Don


const dogPair = [
    ['name', 'Done'],
    ['color', 'black']
]
function getName (dog) {
    return dog.find(attribute => {
        return attribute[0] === 'name';
    })[1];
}
