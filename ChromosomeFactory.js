/*
 * Chromosome Factory Module : It creates well structured chromosomes!
*/

var ChromosomeFactory = function(create, randomGenerate) { 
	if (create) 
		this.create = create;
	if (randomGenerate) 
		this.randomGenerate = randomGenerate;
};

module.exports = ChromosomeFactory;
