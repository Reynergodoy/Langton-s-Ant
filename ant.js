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
        let rules = this.rules;
        let set = this.set;
        const colors = this.colors;
        const amount = set.length;
        
        if (typeof set === 'string') set = set.split('');
        
        if (amount !== colors.length) return false;
        
        for (let i = 0; i < amount; i++) {
            rules[colors[i]] = set[i];
        }
        
        return true;
    }
}
