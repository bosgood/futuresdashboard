var numeral1 = require('numeral');

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
    var decimal = decimalPrice % 1;
    var integer = decimalPrice - decimal;
    var [numerator, denominator] = product.ticksFormat.split('/');
    var fraction = numeral(
        (decimal * parseInt(denominator, 10) / 100)
      )
      .format('.00')
      .slice(1, 3);
    return `${integer}'${fraction}`;
  }
}

module.exports = new PriceUtils;
