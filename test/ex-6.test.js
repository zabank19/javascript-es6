import fs from "fs/promises";

describe("exercise 6: Other Features tests case", () => {
  test("เมื่อทำการ console.log ตัว `result` จะได้ผลลัพธ์แสดงทางหน้าจอออกมาว่า 'Height is not defined'", async () => {
    const data = await fs.readFile("./ex-6.js");
    const code = `${data} return result`;

    const func = new Function(code);
    const result = func();

    expect(result).toBe("Height is not defined");
  });
});
