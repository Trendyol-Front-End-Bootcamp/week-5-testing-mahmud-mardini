import { mostActiveUser, getMostFrequent } from "../src/functions";

describe("bootcamp week 5", () => {

    describe("workshop case 3 homework", () => {

        it("should return the user id with most number of posts", async () => {
            const users = await mostActiveUser();
            expect(users).toEqual(1);
        });

        it("should get the most frequent item", () => {
            const items = [1,1,1,2,2,2,3,3,3,3,3,3,4,4,5];
            expect(getMostFrequent(items)).toEqual(3);
        });

    });
    
});
