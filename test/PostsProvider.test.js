import { postsProvider } from "../src/postsProvider";

    describe("postsProvider service test", () => {

        it("should not return null", async () => {
            const posts = await postsProvider();
            expect(posts).not.toBe(null);
        });

        it("should not return undefined", async () => {
            const posts = await postsProvider();
            expect(posts).not.toBe(undefined);
        });
        
        it("should not return empty array", async () => {
            const posts = await postsProvider();
            expect(posts).not.toBe([]);
        });

    });
