class PriceUtils {
  getActualValue(product, price) {
    return price * product.multiplier;
  }

  convertTicksToDecimal(product, ticksPrice) {
    var [integerStr, fractionStr] = ticksPrice.split('\'');
    var integer = parseInt(integerStr, 10);
    var fraction = parseInt(fractionStr, 10);
    return integer + fraction;
  }

  convertDecimalToTicks(product, decimalPrice) {
    decimal = decimalPrice % 1;
    integer = decimalPrice - decimal;
    [numerator, denominator] = product.ticksFormat.split('/');
    fraction = decimal * denominator;
    return `${integer}'${fraction}`;
  }
}

module.exports = new PriceUtils;
