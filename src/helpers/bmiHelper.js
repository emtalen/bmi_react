export const calculateBmi= (weight, height, calculationSystem) => {
    const bmiValue = calculationSystem == 'metric' ? (weight / (((height / 100) * height) / 100)).toFixed(2) : ((703 * weight) / (Math.pow (height, 2))).toFixed(2)
    const bmiMessage = setBmiMessage(bmiValue);
    return [bmiValue, bmiMessage];
};

const setBmiMessage = finalBMI => {
    if (finalBMI < 18.5) {
        return 'Underweight';
    }

    if (finalBMI > 18.5 && finalBMI < 25) {
        return 'Normal';
    }

    if (finalBMI > 25 && finalBMI < 30) {
        return 'Overweight';
    }

    if (finalBMI > 30) {
        return 'Obese';
    }
};