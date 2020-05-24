describe('Calculate monthly payment', function () {
	it('should calculate the monthly rate correctly', function () {
		const values = { amount: 10000, years: 10, rate: 6 };
		expect(calculateMonthlyPayment(values)).toEqual('111.02');
	});

	it('should return a result with 2 decimal places', function () {
		const values = { amount: 15000, years: 8, rate: 5 };
		expect(calculateMonthlyPayment(values)).toEqual('189.90');
	});
	it('should handle extremely low interest rates', function () {
		const values = { amount: 20000, years: 8, rate: 1 };
		expect(calculateMonthlyPayment(values)).toEqual('216.86');
	});
	it('should handle extremely high interest rates', function () {
		const values = { amount: 30000, years: 30, rate: 99 };
		expect(calculateMonthlyPayment(values)).toEqual('2475.00');
	});
});
