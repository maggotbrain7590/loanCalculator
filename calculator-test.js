
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 10000, years: 5, rate: 15})).toEqual('237.90');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 10157, years: 5, rate: 3.7})).toEqual('185.68');
});


