export class Calculator {
    add(a, b) {
        return a + b
    }

    subtract(a, b) {
        return a - b
    }

    multiply(a, b) {
        return a * b
    }

    divide(a, b) {
        if (b == 0) return null;
        let res = a / b      
        return Math.round(res * 100) / 100;
    }
}