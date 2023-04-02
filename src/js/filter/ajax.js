function FF_Ajax(options){
    var _ = this;
    _.options = options;
    console.log('FF_Ajax initialized updated')
}
FF_Ajax.prototype.run_query = function(){
    console.log('Run query here');
}
FF_Ajax.prototype.loading = function(){
    console.log('loading');
}
FF_Ajax.prototype.loading_complete = function(){
    console.log('loading complete');
}

export default FF_Ajax;