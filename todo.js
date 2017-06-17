if (!this["TODO"]) this["TODO"] = {};
this["TODO"].Todo = (function (NS) {
    var Todo = function () {
        this._target = null;
        this._tasks = [];
        this._key = {};
    };
    Todo.prototype._checkTask = function (task, msg) {
        var isOk = task instanceof NS.Task && this._tasks.indexOf(task) > -1;
        if (!isOk) throw msg + " - " + task;
        return isOk;
    };
    Todo.prototype.setRenderer = function (renderer) {
        if (!(renderer instanceof NS.Renderer)) return;
        renderer.init(this);
        this._target = renderer;
    };
    Todo.prototype._render = function () {
        this._target.render(this._tasks.slice(0));
    };
    Todo.prototype.add = function (title) {
        this._tasks.push(new NS.Task(this._key, title));
        this._render();
    };
    Todo.prototype.remove = function (task) {
        if (!this._checkTask(task, "remove:invalid task")) return;
        this._tasks.splice(this._tasks.indexOf(task), 1);
        this._render();
    };
    Todo.prototype.toggle = function (task) {
        if (!this._checkTask(task, "toggle:invalid task")) return;
        task.toggle(this._key);
        this._render();
    };
    return Todo;
})(this["TODO"]);