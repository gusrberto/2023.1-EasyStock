import { formatTelephone } from "../src/controllers/validation.controller.js";

test('test if it is a number', () => {
    let number = "sadas";
    expect(() => formatTelephone(number)).toThrow(TypeError);
});

test('invalid number of digits', () => {
    let number = "3452"
    expect(() => formatTelephone(number)).toThrow(TypeError);
});

test('number is being formatted', () => {
    let number = "40028922";
    expect(formatTelephone(number)).toBe("4002-8922");
    
    number = "984524321"
    expect(formatTelephone(number)).toBe("98452-4321");

    number = "2133827523"
    expect(formatTelephone(number)).toBe("(21) 3382-7523");

    number = "61984524321"
    expect(formatTelephone(number)).toBe("(61) 98452-4321");
});