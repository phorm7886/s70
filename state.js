if (!this["TODO"]) this["TODO"] = {};
this["TODO"].STATE = (function () {
    var c = {}, p = {};
    return {
        COMPLETE: function () { return c; },
        PROGRESS: function () { return p; }
    };
})(this["TODO"]);