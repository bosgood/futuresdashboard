var futuresSpecs = {
  "products": [
    {
      "id": "CL",
      "nicknames": ["Crude"],
      "shortDescription": "Crude Oil Futures",
      "tickerSymbol": "/CL",
      "priceFormat": "decimal",
      "ticksFormat": null,
      "minimumFluctuation": 0.01,
      "multiplier": 1000,
      "settlementType": "Physical",
      "contractUnit": "1,000 barrels",
      "closedHours": {
        "sunday": {
          "start": "00:00-05:00",
          "end": "18:00-05:00"
        },
        "monday": {
          "start": "17:15-05:00",
          "end": "18:00-05:00"
        },
        "tuesday": {
          "start": "17:15-05:00",
          "end": "18:00-05:00"
        },
        "wednesday": {
          "start": "17:15-05:00",
          "end": "18:00-05:00"
        },
        "thursday": {
          "start": "17:15-05:00",
          "end": "18:00-05:00"
        },
        "friday": {
          "start": "17:15-05:00",
          "end": "23:59-05:00"
        },
        "saturday": {
          "start": "00:00-05:00",
          "end": "23:59-05:00"
        }
      }
    },
    {
      "id": "ZB",
      "nicknames": ["Bonds"],
      "shortDescription": "30-Year US Treasury Bond Futures",
      "tickerSymbol": "/ZB",
      "priceFormat": "ticks",
      "ticksFormat": "1/32",
      "minimumFluctuation": 0.03125,
      "multiplier": 1000,
      "settlementType": "Federal Reserve book-entry wire-transfer system.",
      "contractUnit": "One U.S. Treasury bond having a face value at maturity of $100,000.",
      "closedHours": {
        "sunday": {
          "start": "00:00-05:00",
          "end": "17:00-05:00"
        },
        "monday": {
          "start": "16:15-05:00",
          "end": "17:00-05:00"
        },
        "tuesday": {
          "start": "16:15-05:00",
          "end": "17:00-05:00"
        },
        "wednesday": {
          "start": "16:15-05:00",
          "end": "17:00-05:00"
        },
        "thursday": {
          "start": "16:15-05:00",
          "end": "17:00-05:00"
        },
        "friday": {
          "start": "16:15-05:00",
          "end": "23:59-05:00"
        },
        "saturday": {
          "start": "00:00-05:00",
          "end": "23:59-05:00"
        }
      }
    },
    {
      "id": "ZT",
      "nicknames": ["T-Notes"],
      "shortDescription": "2-Year T-Note Futures",
      "tickerSymbol": "/ZT",
      "priceFormat": "ticks",
      "ticksFormat": "1/320",
      "minimumFluctuation": 0.0078125,
      "multiplier": 1000,
      "settlementType": null,
      "contractUnit": "One U.S. Treasury note having a face value at maturity of $200,000.",
      "closedHours": {
        "sunday": {
          "start": "00:00-05:00",
          "end": "17:00-05:00"
        },
        "monday": {
          "start": "16:15-05:00",
          "end": "17:00-05:00"
        },
        "tuesday": {
          "start": "16:15-05:00",
          "end": "17:00-05:00"
        },
        "wednesday": {
          "start": "16:15-05:00",
          "end": "17:00-05:00"
        },
        "thursday": {
          "start": "16:15-05:00",
          "end": "17:00-05:00"
        },
        "friday": {
          "start": "16:15-05:00",
          "end": "23:59-05:00"
        },
        "saturday": {
          "start": "00:00-05:00",
          "end": "23:59-05:00"
        }
      }
    }
  ]
};

module.exports = futuresSpecs;