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
        
    }
    
    parseRules () {
        let rules = this.rules; // the automata's rules prior to initialization
        let set = this.set; // the rule set either in string or array form
        const colors = this.colors; // the automata's colors
        const amount = set.length; // the rule set length
        
        if (typeof set === 'string') set = set.split(''); // transform the rule set to array form if in string form
        
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
