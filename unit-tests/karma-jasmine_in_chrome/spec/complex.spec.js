describe('Complex numbers', () => {
    describe('Addition', () => {
        it('should properly add two complex numbers with real and imaginary parts', () => {
            // Given
            const c1 = new ComplexNumber(2, 3);
            const c2 = new ComplexNumber(1, 1);

            // When
            const result = c1.add(c2);

            // Then
            expect(result.real).toEqual(3);
            expect(result.img).toEqual(4);
        });

        it('should properly add two complex numbers with only imaginary parts', () => {
            // Given
            const c1 = new ComplexNumber(0, 3);
            const c2 = new ComplexNumber(0, 1);

            // When
            const result = c1.add(c2);

            // Then
            expect(result.real).toEqual(0);
            expect(result.img).toEqual(4);
        });

        it('should properly add two complex numbers with only real parts', () => {
            // Given
            const c1 = new ComplexNumber(2, 0);
            const c2 = new ComplexNumber(-3, 0);

            // When
            const result = c1.add(c2);

            // Then
            expect(result.real).toEqual(-1);
            expect(result.img).toEqual(0);
        });

        it('this one should fail', () => {
            // Given
            const c1 = new ComplexNumber(2, 0);
            const c2 = new ComplexNumber(-3, 0);

            // When
            const result = c1.add(c2);

            // Then
            expect(result.real).toEqual(1);
            expect(result.img).toEqual(0);
        });
    });

})