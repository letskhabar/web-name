
export class RandomUsernameGenerator {
    private noun: string;
    private adj: string;
  
    constructor() {
      this.noun = this.readNoun();
      this.adj = this.readAdj();
    }
  
    private randomInt: (upperBound: number) => number = function (
      upperBound: number,
    ): number {
      return Math.floor(Math.random() * Math.floor(upperBound));
    };
  
    private readNoun() {
      const data = Deno.readTextFileSync("noun.json");
      return JSON.parse(data);
    }
  
    private readAdj() {
      const data = Deno.readTextFileSync("adjective.json");
      return JSON.parse(data);
    }
  
    generateUsername() {
      return this.adj[this.randomInt(500)] + this.noun[this.randomInt(500)];
    }
  }
  
  export default RandomUsernameGenerator;