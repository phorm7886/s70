if (!this["TODO"]) this["TODO"] = {};
this["TODO"].Html = (function (NS) {
    var Html = function (addInit, progress, complete) {
        if (typeof addInit !== 'function') throw 'invalid arg[0]:addInit - ' + addInit;
        if (!(progress instanceof NS.List)) throw 'invalid arg[1]:progress - ' + progress;
        if (!(complete instanceof NS.List)) throw 'invalid arg[1]:progress - ' + complete;
        this._isInited = false;
        this._addInit = addInit;
        this._state = {
            progress: progress,
            complete: complete
        };
    };
    Html.prototype = new NS.Renderer();
    Html.prototype._init = function () {
        var key, target, li;
        if (this._isInited) throw 'already initialized';
        this._isInited = true;
        this._addInit(this._todo);
        delete this._addInit;
        for (key in this._state) this._state[key].init(this._todo);
    };
    Html.prototype._render = function (tasks) {
        var key, i, task, target;
        if (!this._isInited) return;
        for (key in this._state) this._state[key].clear();
        for (i = 0; i < tasks.length; i++) {
            task = tasks[i];
            this._state[task.isComplete() ? "complete" : "progress"].add(task);
        }
    };
    return Html;
})(this["TODO"]);
