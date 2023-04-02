import FF_Filter from "./filter/filter";
import FF_Ajax from "./filter/ajax";

console.log('main.js')
var ff_filter = new FF_Filter({/* options here */});
ff_filter.filter();

var ff_ajax = new FF_Ajax({/* options here */});
ff_ajax.run_query();