
const calculateBmi = (a: number, b: number) : string => {
  let bmi = b/Math.pow(a/100, 2)
  console.log(bmi)
  if (bmi < 18.5) {
    return "Underweight (Unhealthy)"
  } else if (bmi < 22.9) {
    return "Normal range (Healthy)	"
  } else if (bmi <24.9) {
    return "Overweight I (At risk)"
  } else if (bmi <29.9) {
    return "Overweight II (Moderately obese)"
  } else {
    return "Overweight II (Serely obese)"
  }
}

console.log(calculateBmi(185, 70))
