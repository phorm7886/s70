if (!this["TODO"]) this["TODO"] = {};
this["TODO"].Renderer = (function (NS) {
    var Renderer = function () { };
    Renderer.prototype.init = function (todo) {
        if (!(todo instanceof NS.Todo)) throw 'invalid arg[0]:todo - ' + todo;
        this._todo = todo;
        this._init();
    };
    Renderer.prototype.render = function(tasks) {
        this._render(tasks);
    };
    Renderer.prototype._init =
    Renderer.prototype._render = function(tasks) {
        throw "must be overrided";
    };
    return Renderer;
})(this["TODO"]);