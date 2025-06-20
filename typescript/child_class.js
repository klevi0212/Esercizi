"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Currency = /** @class */ (function () {
    function Currency(name, code, symbol) {
        this.name = name;
        this.code = code;
        this.symbol = symbol;
    }
    Currency.prototype.describe = function () {
        var description = "The ".concat(this.name, " currency ");
        description += "has the code ".concat(this.code, " ");
        description += "and uses the symbol ".concat(this.symbol, ".");
        console.log(description);
    };
    return Currency;
}());
// Alter this class to extend the Currency class.
var DetailedCurrency = /** @class */ (function (_super) {
    __extends(DetailedCurrency, _super);
    // Define a private field named `banknotes`.
    // Set the field type so it can be used to store an array of numbers.
    // Add a `banknotes` parameter with the same type as the `banknotes` field.
    function DetailedCurrency(name, code, symbol, banknotes) {
        // Fix this call to the parent constructor.
        var _this = _super.call(this, name, code, symbol) || this;
        _this.banknotes = banknotes;
        return _this;
        // Store the value of the `banknotes` parameter in the corresponding field.
    }
    // Change the visibility modifier on this method so it can be called
    // by code outside of this class.
    DetailedCurrency.prototype.describeBankNotes = function () {
        // Change the visibility of the parent class `name` field so
        // that its value can be read here in this child class method.
        var description = "The ".concat(this.name, " currency uses the banknotes ");
        // Replace `null` with the value of the `banknotes` field.
        description += this.banknotes;
        console.log(description);
    };
    return DetailedCurrency;
}(Currency));
var euroCurrency = new DetailedCurrency("Euro", "EUR", "€", [500, 200, 100, 50, 20, 10, 5]);
euroCurrency.describe();
euroCurrency.describeBankNotes();
