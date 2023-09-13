interface Results {
    days: number;
    tDays: number;
    success: boolean;
    rating: number;
    explanation: string;
    target: number;
    average: number;
}

const exerciseCalculator = (input: number[]): Results => {
    let days = input.length;
    let tDays = 0;
    let sum = 0;
    let rating = 0;
    let explanation = "";

    for (let i = 0; i < input.length; i++) {
        sum += input[i];
        if (input[i] > 0) {
            tDays += 1;
        }
    }

    let average = sum / days;
    let success = average >= 2;

    if (average < 2) {
        rating = 1;
        explanation = "Bad";
    } else if (average <= 3) {
        rating = 2;
        explanation = "Ok";
    } else {
        rating = 3;
        explanation = "Good";
    }

    return {
        days,
        tDays,
        success,
        rating,
        explanation,
        target: 2,
        average
    };
}

const inputValues = process.argv.slice(2).map(Number);

console.log(exerciseCalculator(inputValues));