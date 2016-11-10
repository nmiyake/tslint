var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Lint = require("tslint/lib/lint");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        _super.apply(this, arguments);
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new RuleTwoWalker(sourceFile, this.getOptions()));
    };
    return Rule;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
var RuleTwoWalker = (function (_super) {
    __extends(RuleTwoWalker, _super);
    function RuleTwoWalker() {
        _super.apply(this, arguments);
    }
    RuleTwoWalker.prototype.visitSourceFile = function (node) {
        // do nothing
    };
    return RuleTwoWalker;
})(Lint.RuleWalker);
