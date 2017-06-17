if (!this["TODO"]) this["TODO"] = {};
this["TODO"].Task = (function (NS) {
    var PROGRESS = {}, COMPLETE = {};
    var Task = function (key, title) {
        this._key = key;
        this._title = title;
        this._state = PROGRESS;
    };
    Task.prototype.toString = function () {
        return this._title;
    };
    Task.prototype.toggle = function (key) {
        if (key !== this._key) throw "toggle:invalid key - " + key;
        this._state = this._state == PROGRESS ? COMPLETE : PROGRESS;
    };
    Task.prototype.isComplete = function () {
        return this._state == COMPLETE;
    };
    return Task;
})(this["TODO"]);