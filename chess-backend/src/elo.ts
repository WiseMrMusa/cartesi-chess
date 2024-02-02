class EloRank {
    private k: number;

    constructor(k: number = 32) {
      this.k = k;
    }

    setKFactor(k: number): void {
      this.k = k;
    }

    getKFactor(): number {
      return this.k;
    }

    getExpected(a: number, b: number): number {
      return 1 / (1 + Math.pow(10, ((b - a) / 400)));
    }

    updateRating(expected: number, actual: number, current: number): number {
      return Math.round(current + this.k * (actual - expected));
    }
  }

  export default EloRank;