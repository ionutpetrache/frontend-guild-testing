class ComplexNumber {
    constructor(real, img) {
        this.real = real;
        this.img = img;
    }

    toString() {
        return `${this.real} + ${this.img}i`;
    }

    add(c) {
        return new ComplexNumber(this.real + c.real, this.img + c.img);
    }
}