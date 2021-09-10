// Exercise 1
describe("greetGenerator", () => {
	test("greetGenerator is declared", () => {
		expect(greetGenerator).toBeDefined();
	});

	test("greetGenerator return concatenated string", () => {
		expect(greetGenerator("Hello", "Alex")).toBe("Hello Alex");
	});
});

// Exercise 2
describe("convertToLowerCase", () => {
	test("convertToLowerCase is declared", () => {
		expect(convertToLowerCase).toBeDefined();
	});

	test("convertToLowerCase return lowercase string", () => {
		expect(convertToLowerCase("Hello")).toBe("hello");
	});
});

// Exercise 3
describe("convertToUpperCase", () => {
	test("convertToUpperCase is declared", () => {
		expect(convertToUpperCase).toBeDefined();
	});

	test("convertToUpperCase return uppercase string", () => {
		expect(convertToUpperCase("hello")).toBe("HELLO");
	});
});

// Exercise 4
describe("getCharByIndex", () => {
	test("getCharByIndex is declared", () => {
		expect(getCharByIndex).toBeDefined();
	});

	test("getCharByIndex return character from selected index", () => {
		expect(getCharByIndex("I like London", 5)).toBe("e");
	});
});
