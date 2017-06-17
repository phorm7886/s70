if (!this["TODO"]) this["TODO"] = {};
this["TODO"].List = (function () {
    var List = function () { };
    List.prototype.init = function (todo) {
        this._todo = todo;
        this._init();
    };
    List.prototype.clear = function () {
        this._clear();
    };
    List.prototype.add = function (task) {
        this._add(task);
    };
    List.prototype._init =
        List.prototype._clear =
        List.prototype._add = function (todo) {
            throw "must be overrided";
        };
    return List;
})(this["TODO"]);