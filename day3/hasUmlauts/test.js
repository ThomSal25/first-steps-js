describe("isUmlauts function tests", function () {
  it("returns a true when the string contains umlauts", function () {
    chai.expect(isUpperCase("Fürst")).to.be.true;
    chai.expect(isUpperCase("Straßenbahn")).to.be.true;
    chai.expect(isUpperCase("Räuber")).to.be.true;
    chai.expect(isUpperCase("Mörtel")).to.be.true;
  });

  it("is case insensitive", function () {
    chai.expect(isUpperCase("fürst")).to.be.true;
    chai.expect(isUpperCase("FÜRST")).to.be.true;
    chai.expect(isUpperCase("straßenbahn")).to.be.true;
    chai.expect(isUpperCase("STRAßENBAHN")).to.be.true;
    chai.expect(isUpperCase("räuber")).to.be.true;
    chai.expect(isUpperCase("RÄUBER")).to.be.true;
    chai.expect(isUpperCase("MÖRTEL")).to.be.true;
    chai.expect(isUpperCase("mörtel")).to.be.true;
    chai.expect(isUpperCase("KAESE")).to.be.false;
    chai.expect(isUpperCase("OEL")).to.be.false;
  });

  it("returns false when the string is not complete uppercase", function () {
    chai.expect(isUpperCase("Kaese")).to.be.false;

    chai.expect(isUpperCase("Oel")).to.be.false;
    chai.expect(isUpperCase("Strasse")).to.be.false;
  });

  it("returns nothing when no parameter was used and the parameter is not a string", function () {
    chai.expect(isUpperCase()).to.be.undefined;
  });
});
