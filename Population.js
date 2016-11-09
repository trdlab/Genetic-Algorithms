/*
 * Many thanks to http://burakkanber.com/blog/machine-learning-genetic-algorithms-part-1-javascript/
*/



/*
 * Population Module : It represents the array of candidate solutions!
*/

var Chromosome = require('./Chromosome.js');

var Population = function(chFactory, goal, size) {
    this.members = [];
    this.goal = goal;
    this.generationNumber = 0;
    while (size--) {
        var c = chFactory.randomGenerate();
        this.members.push(c);
    }
    
};
Population.prototype.display = function(showChromosome) {
    var targetText = "";
    if (showChromosome) {
	targetText = ", Target : " + this.goal.toString();
    }
    console.log("Generation: " + this.generationNumber + ", Difference(" + this.members[0].cost + ")" +  targetText);
    if (showChromosome) {
     	console.log("1.Chromosome: " + this.members[0].toString());
    	console.log("2.Chromosome: " + this.members[1].toString());
    }
};
Population.prototype.sort = function() {
    this.members.sort(function(a, b) {
        return a.cost - b.cost;
    });
}
Population.prototype.generation = function() {
    for (var i = 0; i < this.members.length; i++) {
        this.members[i].calcCost(this.goal);
    }

    this.sort();
    this.display(false);
    var children = this.members[0].mate(this.members[1]);
    this.members.splice(this.members.length - 2, 2, children[0], children[1]);
    
    for (var i = 0; i < this.members.length; i++) {
        this.members[i].mutate(0.5);
        this.members[i].calcCost(this.goal);
        if (this.members[i].cost == 0) {
            this.sort();
            this.display(true);
            return true;
        }
    }
    this.generationNumber++;
    var scope = this;
    setTimeout(function() {
        scope.generation();
    }, 20);
};

module.exports = Population;
