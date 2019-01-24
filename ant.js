export class Ant {
    constructor (colors, set, pos, dimensions) {
        this.colors = colors;
        this.set = set;
        this.rules = {};
        this.pos = pos;
        this.dimensions = dimensions;
        this.state = [];
    }
    
    step () {
        const [x, y, cardinal] = this.pos; // gets position and cardinal direction faced by ant
        const modulo = this.colors.length; 
        const state = this.state[x][y]; // gets color and caches
        const movement = this.rules[this.colors[state]]; // gets movement rule
        
        this.state[x][y] = (this.state[x][y] + 1) % modulo; // changes color
        
        if (cardinal === 'N') {
            if (movement === 'R') {
                this.pos[0] += 1; // sets new x coordinate
                this.pos[2] = 'E'; // sets new cardinal direction
            } else if (movement === 'L') {
                this.pos[0] -= 1;
                this.pos[2] = 'W';
            }
        } else if (cardinal === 'S') {
            if (movement === 'R') {
                this.pos[0] -= 1;
                this.pos[2] = 'W';
            } else if (movement === 'L') {
                this.pos[0] += 1;
                this.pos[2] = 'E';
            }
        } else if (cardinal === 'E') {
            if (movement === 'R') {
                this.pos[1] += 1; // sets new y pos, SOUTH in the grid is positive
                this.pos[2] = 'S';
            } else if (movement === 'L') {
                this.pos[1] -= 1; // NORTH is negative
                this.pos[2] = 'N';
            }
        } else if (cardinal === 'W') {
            if (movement === 'R') {
                this.pos[1] -= 1;
                this.pos[2] = 'N';
            } else if (movement === 'L') {
                this.pos[2] += 1;
                this.pos[2] = 'S';
            }
        }
        return this;
    }
    
    parseRules () {
        let rules = this.rules; // the automata's rules prior to initialization
        let set = this.set; // the rule set either in string or array form
        const colors = this.colors; // the automata's colors
        const amount = set.length; // the rule set length
        
        if (typeof set === 'string') set = set.split(''); // transforms the rule set to array form if in string form
        
        if (amount !== colors.length) return false; // check the colors length to see if it matches with rules length
        
        for (let i = 0; i < amount; i++) {
            rules[colors[i]] = set[i]; // initializes the rules
        }
        
        return true;
    }
    
    startState () { // starts the finite board
        const [x, y] = this.dimensions;
        const state = this.state;
        
        for (let i = 0; i < x; i++) {
            state.push([]);
            for (let j = 0; j < y; j++) {
                state[i].push(0);
            }
        }
        
        return this;
    }
}
