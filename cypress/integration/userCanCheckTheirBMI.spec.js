describe("BMI Calculator", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Calculates BMI in metric", () => {
    cy.get("#selectmethod").click();
    cy.get("input#weight").type(90);
    cy.get("input#height").type(190);
    cy.get("button#calculate").click();
    cy.get("p#bmi-message").should(
      "contain",
      "You are Normal with a BMI of 24.93"
    );
  });
  it('Calculates BMI in imperial',() => {
    cy.get('.StyledIcon-ofa7kd-0').click();
    cy.get(
      ".iElqND > .StyledBox-sc-13pk1d4-0 > .StyledText-sc-1sadyjn-0"
    ).click({ multiple: true });
    cy.get('input#weight').type(198);
    cy.get('input#height').type(74);
    cy.get('button#calculate').click();
    cy.get('p#bmi-message').should('contain', 'You are Overweight with a BMI of 25.42')
  })
});
