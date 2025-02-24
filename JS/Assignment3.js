
// 1.Atm Witndrawal Scenario

function atmWithdrawal(balance, amount, pin, enteredPin) {
   if (enteredPin !== pin) {
       return "Incorrect pin entered";
   }

   if (amount > balance) {
       return "Insufficient Balance";
   }

   if (amount % 100 === 0) {
       return `Withdrawal Successful of ${amount} rupees`;
   } else {
       return "Enter amount in multiples of 100";
   }
}

let balance = 10000;
let amount = 5000;
let enteredPin = 6783;
let pin = 6783;

console.log(atmWithdrawal(balance, amount, pin, enteredPin));
amount = 5050;
console.log(atmWithdrawal(balance, amount, pin, enteredPin));
enteredPin = 1234;
console.log(atmWithdrawal(balance, amount, pin, enteredPin));

// 2.Online Shopping Discount & Free Shipping

function calculateFinalAmount(orderAmount) {
   let shipAmt = 0;
   let finalAmount = orderAmount; 

   if (orderAmount >= 1000) {
       finalAmount = orderAmount * 0.8;
       return "heyyy, you are entitled to free shipping and 20% discount is applied and your order amount is " + finalAmount;
   } else if (orderAmount >= 500 && orderAmount < 1000) {
       finalAmount = orderAmount * 0.9;
       return "heyyy, you are entitled to free shipping and 10% discount is applied. Add items worth more than $1000 for 20% discount and your order amount is " + finalAmount;
   } else if (orderAmount >= 50 && orderAmount < 500) {
       finalAmount = orderAmount; // No discount
       return "heyyy, you are entitled to free shipping. Add items worth more than $500 or $1000 for a discount of 10% & 20% respectively and your order amount is " + finalAmount;
   } else {
       shipAmt = 10;
       finalAmount = orderAmount + shipAmt;
       return "$10 express delivery charge is applied. To avoid please add items worth more than $50 and your order amount is " + finalAmount;
   }
}

console.log(calculateFinalAmount(1000));
console.log(calculateFinalAmount(49));
console.log(calculateFinalAmount(700));
console.log(calculateFinalAmount(20));

//3. Student Grading System with Extra Credit

function calculateGrade(marks, attendance) {
   if (attendance > 90) {
       marks += 5;
   }

   let grade = Math.floor(marks / 10); 

   switch (grade) {
       case 10: // 100
       case 9:  // 90-99
           return "A";
       case 8:  // 80-89
           return "B";
       case 7:  // 70-79
           return "C";
       case 6:  // 60-69
           return "D";
       default: // Below 60
           return "F";
   }
}

// Examples
console.log(calculateGrade(85, 95));
console.log(calculateGrade(75, 80));
console.log(calculateGrade(55, 98));
console.log(calculateGrade(40, 70));
console.log(calculateGrade(92, 85));



// 4. Smart Traffic Light System


function trafficLightControl(density) {
   switch (density) {
       case "Heavy Traffic":
           return 60;
       case "Moderate Traffic":
           return 40;
       case "Light Traffic":
           return 20;
       default:
           return "Invalid Traffic Density"; 
   }
}

// Examples
console.log(trafficLightControl("Heavy Traffic"));    // Output: 60
console.log(trafficLightControl("Moderate Traffic")); // Output: 40
console.log(trafficLightControl("Light Traffic"));    // Output: 20
console.log(trafficLightControl("Medium Traffic"));   // Output: Invalid Traffic Density



//5. Movie Ticket Pricing with Time and Age Discount

function calculateTicketPrice(age, showTime) {
   let basePrice = 12;
   let finalPrice = basePrice;

   // Matinee discount
   if (showTime < 17) { 
       finalPrice *= 0.8; // 20% discount
   }

   // Age-based discounts
   if (age > 60) {
       finalPrice *= 0.7; // 30% discount
   } else if (age < 12) {
       finalPrice *= 0.6; // 40% discount
   }

   return finalPrice;
}

// Examples
console.log(calculateTicketPrice(30, 14)); // Matinee, no age discount
console.log(calculateTicketPrice(70, 20)); // Senior, no matinee
console.log(calculateTicketPrice(10, 10)); // Child, matinee
console.log(calculateTicketPrice(35, 21)); // No discount
console.log(calculateTicketPrice(65, 16)); // senior, matinee.



//6. Job Application Filter

function checkJobApplicationEligibility(applicantAge, yearsOfExperience, highestQualification) {
   const minAge = 21;
   const maxAge = 55;
   const minExperienceYears = 2;
   const requiredQualification = "Bachelor's Degree";

   const isAgeWithinRange = applicantAge >= minAge && applicantAge <= maxAge;
   const hasSufficientExperience = yearsOfExperience >= minExperienceYears;
   const hasRequiredQualification = highestQualification === requiredQualification;

   if (isAgeWithinRange && hasSufficientExperience && hasRequiredQualification) {
       return true; // if Applicant is eligible
   } else {
       return false; // if Applicant is not eligible
   }
}

// Examples
console.log(checkJobApplicationEligibility(30, 5, "Bachelor's Degree")); // true
console.log(checkJobApplicationEligibility(20, 3, "Bachelor's Degree")); // false (age too low)


// 7. E-commerce Coupon Redemption

function calcFinalPrice(orderTotal, couponCode) {
   const discount10Coupon = "DISCOUNT10";
   const freeShippingCoupon = "FREESHIP";
   const discount10Threshold = 500;
   const freeShippingThreshold = 200;

   if (couponCode === discount10Coupon && orderTotal > discount10Threshold) {
       return orderTotal * 0.9; // 10% discount
   } else if (couponCode === freeShippingCoupon && orderTotal > freeShippingThreshold) {
       return orderTotal; // Free shipping (no change in price)
   } else {
       return orderTotal; // No coupon or conditions not met
   }
}

// Examples
console.log(calcFinalPrice(600, "DISCOUNT10")); // 540
console.log(calcFinalPrice(300, "FREESHIP")); // 300
console.log(calcFinalPrice(100, "DISCOUNT10")); // 100



//8.

function choosePlan (basic, trainer, diet) {
   if (diet && trainer) {
       return "VIP ($80/month): Gym + Trainer + Diet Plan";
   } else if (trainer) {
       return "Premium ($50/month): Gym + Personal Trainer";
   } else if (basic) {
       return "Basic ($20/month): Only gym access";
   } else {
       return "Please specify your requirements.";
   }
}

// Examples
console.log (choosePlan(false, true, true)); // VIP
console.log (choosePlan(false, true, false)); // Premium
console.log (choosePlan(true, false, false)); // Basic




//9. Electricity Bill Calculation with Peak Hours

function calculateBill(units, time) {
   const normalStart = 8;
   const normalEnd = 20;
   const peakCharge = 0.10;
   let rate;

   if (units < 100) {
       rate = 5;
   } else if (units <= 300) {
       rate = 4;
   } else {
       rate = 3;
   }

   const isPeak = time < normalStart || time >= normalEnd;
   let bill = units * rate;

   if (isPeak) {
       bill += bill * peakCharge;
   }

   return bill;
}

console.log(calculateBill(150, 10)); // 600
console.log(calculateBill(200, 22)); // 880


// 10. Flight Ticket Booking System


function calculateFare(cls, luggage, student, senior) {
   const base = 300;
   let fare = base;

   const busExtra = 200;
   const firstExtra = 500;
   const lugLimit = 20;
   const extraCharge = 50;
   const stuDisc = 0.15;
   const senDisc = 0.10;
   const senAge = 60;

   if (cls === "Business") {
       fare += busExtra;
   } else if (cls === "First") {
       fare += firstExtra;
   }

   if (luggage > lugLimit) {
       const extraLug = luggage - lugLimit;
       fare += Math.ceil(extraLug / 10) * extraCharge;
   }

   if (student) {
       fare *= (1 - stuDisc);
   } else if (senior && senior > senAge) {
       fare *= (1 - senDisc);
   }

   return fare;
}

console.log(calculateFare("Economy", 25, true, false)); // 306.25
console.log(calculateFare("Business", 35, false, true)); // 530
console.log(calculateFare("First", 15, false, false)); // 800
