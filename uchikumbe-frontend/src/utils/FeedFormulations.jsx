// Utility function to calculate broiler feed formulation
export const calculateBroilerFeedFormulation = (age, feedAmount) => {
    let formulation = {};
  
    if (age >= 1 && age <= 4) {
      formulation = {
        maize: +(0.572 * feedAmount).toFixed(2),
        fishMeal: +(0.172 * feedAmount).toFixed(2),
        soyaBeanMeal: +(0.2 * feedAmount).toFixed(2),
        lime: +(0.058 * feedAmount).toFixed(2),
        vitaminMineralPremix: +(0.0014 * feedAmount).toFixed(2),
        lysine: +(0.0007 * feedAmount).toFixed(2),
        threonine: +(0.0007 * feedAmount).toFixed(2),
      };
    } else if (age > 4) {
      formulation = {
        maize: +(0.44 * feedAmount).toFixed(2),
        soybeanFullFat: +(0.34 * feedAmount).toFixed(2),
        groundNutCake: +(0.02 * feedAmount).toFixed(2),
        breweryDryGrain: +(0.12 * feedAmount).toFixed(2),
        maizeOffal: +(0.04 * feedAmount).toFixed(2),
        boneMeal: +(0.03 * feedAmount).toFixed(2),
        methionine: +(0.0025 * feedAmount).toFixed(2),
        vitaminMineralPremix: +(0.0025 * feedAmount).toFixed(2),
        salt: +(0.0025 * feedAmount).toFixed(2),
        toxinBinder: +(0.0001 * feedAmount).toFixed(2),
        coccidiostat: +(0.0001 * feedAmount).toFixed(2),
        zinc: +(0.00005 * feedAmount).toFixed(2),
      };
    }
  
    return formulation;
  };
  
  // Utility function to calculate layers feed formulation
  export const calculateLayersFeedFormulation = (age, feedAmount) => {
    let formulation = {};
  
    if (age >= 1 && age <= 4) {
      formulation = {
        maize: +(0.46 * feedAmount).toFixed(2),
        riceBran: +(0.13 * feedAmount).toFixed(2),
        ricePollard: +(0.1 * feedAmount).toFixed(2),
        sunflowerMeal: +(0.25 * feedAmount).toFixed(2),
        fishMeal: +(0.026 * feedAmount).toFixed(2),
        lime: +(0.025 * feedAmount).toFixed(2),
        salt: +(0.007 * feedAmount).toFixed(2),
        vitaminMineralPremix: +(0.004 * feedAmount).toFixed(2),
        tryptophan: +(0.0014 * feedAmount).toFixed(2),
        lysine: +(0.0002 * feedAmount).toFixed(2),
        methionine: +(0.0002 * feedAmount).toFixed(2),
        threonine: +(0.0014 * feedAmount).toFixed(2),
        growthEnhancers: +(0.001 * feedAmount).toFixed(2),
        toxinBinder: +(0.0012 * feedAmount).toFixed(2),
      };
    } else if (age >= 5 && age <= 18) {
      formulation = {
        wholeMaize: +(0.143 * feedAmount).toFixed(2),
        maizeGerm: +(0.243 * feedAmount).toFixed(2),
        ricePollard: +(0.186 * feedAmount).toFixed(2),
        riceBran: +(0.143 * feedAmount).toFixed(2),
        sunflowerCake: +(0.157 * feedAmount).toFixed(2),
        soyaMeal: +(0.049 * feedAmount).toFixed(2),
        lime: +(0.029 * feedAmount).toFixed(2),
        boneMeal: +(0.01 * feedAmount).toFixed(2),
        fishMeal: +(0.043 * feedAmount).toFixed(2),
        salt: +(0.0004 * feedAmount).toFixed(2),
        coccidiostat: +(0.00005 * feedAmount).toFixed(2),
        vitaminMineralPremix: +(0.0003 * feedAmount).toFixed(2),
        zincBacitracin: +(0.00005 * feedAmount).toFixed(2),
        toxinBinder: +(0.00011 * feedAmount).toFixed(2),
      };
    } else if (age > 18) {
      formulation = {
        wholeMaize: +(0.485 * feedAmount).toFixed(2),
        soya: +(0.17 * feedAmount).toFixed(2),
        fishMeal: +(0.11 * feedAmount).toFixed(2),
        lime: +(0.095 * feedAmount).toFixed(2),
        eggProductionEnhancer: +(0.002 * feedAmount).toFixed(2),
        lysine: +(0.001 * feedAmount).toFixed(2),
        methionine: +(0.0005 * feedAmount).toFixed(2),
        threonine: +(0.001 * feedAmount).toFixed(2),
        tryptophan: +(0.0005 * feedAmount).toFixed(2),
        toxinBinder: +(0.00075 * feedAmount).toFixed(2),
      };
    }
  
    return formulation;
  };
  