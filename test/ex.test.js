import fs from "fs/promises";

describe("ES6 tests cases", () => {
  test("exercise 1: Merging object", async () => {
    const data = await fs.readFile("./ex-1.js");
    const code = `${data} return newStudentProfile`;

    const func = new Function(code);
    const newStudentProfile = func();

    expect(newStudentProfile).toStrictEqual({
      name: "John",
      age: 20,
      scores: {
        thai: 40,
      },
      photo: "https://placedog.net/500",
      hobbies: ["Football", "Coding"],
    });
  });

  test("exercise 2: Merging nested object", async () => {
    const data = await fs.readFile("./ex-2.js");
    const code = `${data} return newStudentProfile`;

    const func = new Function(code);
    const newStudentProfile = func();

    expect(newStudentProfile).toStrictEqual({
      name: "John",
      age: 20,
      scores: { thai: 40, math: 30, english: 70, tech: 100 },
    });
  });

  test("exercise 3: Merging the Arrays", async () => {
    const data = await fs.readFile("./ex-3.js");
    const code = `${data} return newOrders`;

    const func = new Function(code);
    const newOrders = func();

    expect(newOrders).toStrictEqual([
      {
        orderId: "A001",
        paymentType: "Cash",
        totalPrice: 2500,
      },
      {
        orderId: "A002",
        paymentType: "Credit Card",
        totalPrice: 4000,
      },
      {
        orderId: "A003",
        paymentType: "Credit Card",
        totalPrice: 6000,
      },
      {
        orderId: "A004",
        paymentType: "Credit Card",
        totalPrice: 611000,
      },
      {
        orderId: "A005",
        paymentType: "Credit Card",
        totalPrice: 45000,
      },
    ]);
  });

  test("exercise 4: Merging Nested Array", async () => {
    const data = await fs.readFile("./ex-4.js");
    const code = `${data} return newStudentProfile`;

    const func = new Function(code);
    const newStudentProfile = func();

    expect(newStudentProfile).toStrictEqual({
      name: "John",
      age: 20,
      scores: { thai: 40 },
      hobbies: ["Football", "Coding", "Painting", "Yoga"],
    });
  });

  test("exercise 5: Rest operators", async () => {
    const data = await fs.readFile("./ex-5.js");
    const code = `${data} return { result1, result2 }`;

    const func = new Function(code);
    const { result1, result2 } = func();

    expect(result1).toBe(36);
    expect(result2).toBe(10);
  });
});
