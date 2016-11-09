/*
 * Many thanks to http://burakkanber.com/blog/machine-learning-genetic-algorithms-part-1-javascript/
*/


/*
 * Gene Module : It represents any property to optimize!
*/

var Gene = function(property, mutationKernel, getInt) {  
	if (property)
                this.property = property;
        if (mutationKernel)
                this.mutationKernel = mutationKernel;
	if (getInt)
                this.getIntKernel = getInt;
	this.getInt = function() { return this.getIntKernel(this.property); };
};

Gene.prototype.mutate = function() {
        this.property = this.mutationKernel(this.property);
}

Gene.prototype.deepClone = function() {
	return new Gene(this.property, this.mutationKernel, this.getIntKernel);
}



module.exports = Gene;
