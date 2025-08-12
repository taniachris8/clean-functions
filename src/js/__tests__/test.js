import { identifyHealth } from "../app.js";

test("Healthy character test", () => {
    let character = { name: "Маг", health: 90 };
    expect(identifyHealth(character)).toBe("healthy");
});

test("Wounded character test", () => {
    let character = { name: "Троль", health: 50 };
    expect(identifyHealth(character)).toBe("wounded");
});

test("Critical health test", () => {
    let character = { name: "Хоббит", health: 3 };
    expect(identifyHealth(character)).toBe("critical");
});