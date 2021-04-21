export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  decreaseBenefitBy(n) {
    // The Benefit of an item is never negative.
    this.benefit -= this.benefit - n < 0 ? this.benefit : n
  }  
  increaseBenefitBy(n) {
    // The Benefit of an item is never more than 50.
    this.benefit += this.benefit + n > 50 ? 50 - this.benefit : n
  }
  
  // speed() {

  // }

  // expired() {
  //   this > 0
  // }


}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  
  updateBenefitValue() {

    
    this.drugs.forEach(drug => {
      switch (drug.name) {
        case "Herbal Tea":
          drug.increaseBenefitBy(drug.expiresIn > 0 ? 1 : 2)
          break;
        case "Magic Pill":
          drug.expiresIn += 1
          break;
        case "Fervex":
          if (drug.expiresIn <= 0) {
            drug.benefit = 0
          } else if (drug.expiresIn > 10) {
            drug.increaseBenefitBy(1)
          } else if (drug.expiresIn > 5) {
            drug.increaseBenefitBy(2)
          } else {
            drug.increaseBenefitBy(3)
          }
          break;
        case "Dafalgan":
  
          break;      
        default:
          drug.decreaseBenefitBy(drug.expiresIn > 0 ? 1 : 2)
        }
        
        drug.expiresIn -= 1


      // if (
      //   drug.name != "Herbal Tea" &&
      //   drug.name != "Fervex"
      // ) {
      //   if (drug.benefit > 0) {
      //     if (drug.name != "Magic Pill") {
      //       drug.benefit -= 1;
      //     }
      //   }
      // } else {
      //   if (drug.benefit < 50) {
      //     drug.benefit += 1;
      //     if (drug.name == "Fervex") {
      //       if (drug.expiresIn < 11) {
      //         if (drug.benefit < 50) {
      //           drug.benefit += 1;
      //         }
      //       }
      //       if (drug.expiresIn < 6) {
      //         if (drug.benefit < 50) {
      //           drug.benefit += 1;
      //         }
      //       }
      //     }
      //   }
      // }
      // if (drug.name != "Magic Pill") {
      //   drug.expiresIn = drug.expiresIn - 1;
      // }
      // if (drug.expiresIn < 0) {
      //   if (drug.name != "Herbal Tea") {
      //     if (drug.name != "Fervex") {
      //       if (drug.benefit > 0) {
      //         if (drug.name != "Magic Pill") {
      //           drug.benefit -= 1;
      //         }
      //       }
      //     } else {
      //       drug.benefit =
      //         drug.benefit - drug.benefit;
      //     }
      //   } else {
      //     if (drug.benefit < 50) {
      //       drug.benefit += 1;
      //     }
      //   }
      // }
    })

    return this.drugs;
  }

  
}
