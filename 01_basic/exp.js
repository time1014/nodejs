console.log("Hello , World".replace(/l/g, "L"))
console.log(/^0\d{1,2}-\d{3,4}-\d{4}$/.test("010-1111-1111"))
console.log(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test('ads@Naver.com'))