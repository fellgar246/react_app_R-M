const app = require('../app');
const session = require('supertest');
const agent = session(app);

describe("Route: GET rickandmorty/onsearch/:id", () => {
    it("Responde con status: 200", async () => {
        const response = await session(app).get("/rickandmorty/onsearch/1")
        expect(response.statusCode).toBe(200);
    });
    test("Responde un objeto con las propiedades: id, name, species, gender e image", async () => {
        const response = await session(app).get("/rickandmorty/onsearch/1");
        expect(Object.keys(response.body)).toEqual([
            "id",
            "name",
            "image",
            "gender",
            "species",
        ])
    });
    it("Responde con status: 500", () => {
        return agent.get("/rickandmorty/onsearch/10800").send()
                    .then(response => expect(response.statusCode).toBe(500))
    });
})
