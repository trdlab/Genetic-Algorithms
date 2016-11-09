var ChromosomeFactory = require('./ChromosomeFactory.js');
var Chromosome = require('./Chromosome.js');
var Gene = require('./Gene.js');
var Population = require('./Population.js');

var goal = "asd xxxxaasdasd asd ";

var chFactory = new ChromosomeFactory(function(str){
        var code = [];
        for (var i = 0; i < goal.length; ++i) {
		code.push(new Gene(str.charCodeAt(i), function(val){
			var upOrDown = Math.random() <= 0.5 ? -1 : 1;
			return val + upOrDown;	
		}, function(property) {
			return property;
		}));
	}
	return new Chromosome(code);
}, function(){
        var code = [];
        for (var i = 0; i < goal.length; ++i) {
		code.push(new Gene(Math.floor(Math.random()*255), function(val){
			var upOrDown = Math.random() <= 0.5 ? -1 : 1;
			return val + upOrDown;	
		}, function(property) {
			return property;
		}));
	}
	return new Chromosome(code);
});


var resultChromosome = chFactory.create(goal);

var population = new Population(chFactory, resultChromosome, 50);
population.generation();


