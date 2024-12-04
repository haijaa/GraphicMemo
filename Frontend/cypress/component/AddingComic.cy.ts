import AddComic from '../../src/components/AddComic'
import {
    When,
    Then,
    Given,
    Before
  } from '@badeball/cypress-cucumber-preprocessor'

describe('<AddComic /> TDD Component testing with BDD', () => {
  Before(() => {
    cy.visit('http://localhost:5173')
    cy.mount(<AddComic/>)
  })
  
  Given('Im on the website and the library shows X comics', () => {})
  When('Im clicking on Add comic and enters all fields then clicks Add', () => {
    cy.get('#addComic').click()
    cy.get('')
  })
  })