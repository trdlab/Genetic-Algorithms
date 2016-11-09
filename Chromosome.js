/*
 * Many thanks to http://burakkanber.com/blog/machine-learning-genetic-algorithms-part-1-javascript/
 * We have extend the source from the example for object based gene code!
*/


/*
 * Chromosome Module : It represents the array of properties to optimize!
*/

var Chromosome = function(code) {
    this.code = [];
    for (var i = 0; i < code.length; ++i) {
	this.code.push(code[i].deepClone());
    }
    this.cost = 9999;
};

Chromosome.prototype.mutate = function(chance) {  
        if (Math.random() < chance)
                return;
        var index = Math.floor(Math.random()*this.code.length);
        this.code[index].mutate();
}

Chromosome.prototype.toString = function() {
    
    var str = "";
    for (var i = 0; i < this.code.length; ++i) {
	str += String.fromCharCode(this.code[i].getInt());
    }
    return str;

};
Chromosome.prototype.mate = function(gene) {
    var pivot = Math.round(this.code.length / 2) - 1;

    var child1 = this.code.slice(0, pivot).concat(gene.code.slice(pivot));
    var child2 = gene.code.slice(0, pivot).concat(this.code.slice(pivot));
    return [new Chromosome(child1), new Chromosome(child2)];
};
Chromosome.prototype.calcCost = function(compareTo) {
    var total = 0;
    for (i = 0; i < this.code.length; i++) {
        total += (this.code[i].getInt() - compareTo.code[i].getInt()) * (this.code[i].getInt() - compareTo.code[i].getInt());
    }
    this.cost = total;
    
};

module.exports = Chromosome;
