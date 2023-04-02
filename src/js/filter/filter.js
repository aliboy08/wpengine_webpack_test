function FF_Filter(options){
    var _ = this;
    _.options = options;
    console.log('initializing Filter updated');
}
FF_Filter.prototype.filter = function(){
    console.log('Filter!');
}

export default FF_Filter;