// Exercise 1
describe("isOdd", () => {
	test("isOdd is declared", () => {
		expect(isOdd).toBeDefined();
	});

	test("oddOrEven return string for odd number", () => {
		expect(isOdd(5)).toBe("Is odd");
	});

	test("isOdd return string for anything else", () => {
		expect(isOdd(6)).toBe("Not odd");
	});
});

// Exercise 2
describe("isEven", () => {
	test("isEven is declared", () => {
		expect(isEven).toBeDefined();
	});

	test("isEven return string for even number", () => {
		expect(isEven(6)).toBe("Is even");
	});

	test("isEven return string for anything else", () => {
		expect(isEven(5)).toBe("Not even");
	});
});

// Exercise 3
describe("oddOrEven", () => {
	test("oddOrEven is declared", () => {
		expect(oddOrEven).toBeDefined();
	});

	test("oddOrEven return string for odd number", () => {
		expect(oddOrEven(5)).toBe("Is odd");
	});

	test("oddOrEven return string for even number", () => {
		expect(oddOrEven(6)).toBe("Is even");
	});
});

// Exercise 4
describe("roundedNumber", () => {
	test("roundedNumber is declared", () => {
		expect(roundedNumber).toBeDefined();
	});

	test("roundedNumber return correctly rounded number", () => {
		expect(roundedNumber(5.6)).toBe(6);
		expect(roundedNumber(5.1)).toBe(5);
	});
});

// Exercise 5
describe("roundToLowerInteger", () => {
	test("roundToLowerInteger is declared", () => {
		expect(roundToLowerInteger).toBeDefined();
	});

	test("roundToLowerInteger returns the largest integer less than or equal to a given number", () => {
		expect(roundToLowerInteger(5.9)).toBe(5);
		expect(roundToLowerInteger(5.1)).toBe(5);
	});
});

// Exercise 6
describe("roundToLargerInteger", () => {
	test("roundToLargerInteger is declared", () => {
		expect(roundToLargerInteger).toBeDefined();
	});

	test("roundToLargerInteger returns rounded number up to the next largest integer", () => {
		expect(roundToLargerInteger(5.9)).toBe(6);
		expect(roundToLargerInteger(5.1)).toBe(6);
	});
});

// Exercise 7
describe("convertToPositive", () => {
	test("convertToPositive is declared", () => {
		expect(convertToPositive).toBeDefined();
	});

	test("convertToPositive returns positive number", () => {
		expect(convertToPositive(-5)).toBe(5);
		expect(convertToPositive(-5) >= 0).toBe(true);
	});
});

// Exercise 8
describe("findMaxNumber", () => {
	test("findMaxNumber is declared", () => {
		expect(findMaxNumber).toBeDefined();
	});

	test("findMaxNumber returns max number", () => {
		expect(findMaxNumber(2,6,1,8)).toBe(8);
	});
});

// Exercise 9
describe("findMinNumber", () => {
	test("findMinNumber is declared", () => {
		expect(findMinNumber).toBeDefined();
	});

	test("findMinNumber returns min number", () => {
		expect(findMinNumber(2,6,1,8)).toBe(1);
	});
});