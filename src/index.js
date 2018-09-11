class Sorter {

  constructor() {
	  this.arr = [];
	  this.compareFunction = (a, b) => a - b;
  }

  add(element) {
	  this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
	  return this.arr.length;
  }

  toArray() {
	  return this.arr;
  }

  sort(indices) {
	let sortedArray = [];
	indices.sort((a,b) => a - b );
	for ( let value of indices){
		(this.arr[value]) ? sortedArray.push(this.arr[value]) : null;	
	}
	sortedArray.sort(this.compareFunction);
	for (let i = 0; i <= sortedArray.length; i++ ){
		(this.arr[indices[i]])
		 	? (this.arr[indices[i]] = sortedArray[i])
			: null;
	}
	return this.arr;
  }

  setComparator(compareFunction) {
	return (compareFunction == undefined) ? false : (this.compareFunction = compareFunction);
  }
  
}

module.exports = Sorter;