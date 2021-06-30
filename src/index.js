/**
 * @file index.js is the root file for this example app
 * @author David Baty
 * @see <a href="https://github.com/greatdane89">My Github Profile</a>
 */

/**
 * String Variable
 * @type {string}
 */
const myStringVariable = "string value";

/**
 * Random Array
 * @type {Array.<string>}
 */
const randomArray = ["one", "another one", "🔥", "string"];

/**
 * Class to create an animal
 */
class Animal {
  /**
   *
   * @param {object} animalInfo
   */
  constructor(animalInfo) {
    /**
     * @property {string} type Animal Type
     */
    this.type = animalInfo.type;
    /**
     * @property {string} Legs Number of legs animal has
     */
    this.legs = animalInfo.legs;
    /**
     * @property {string} Age Age of animal
     */
    this.age = animalInfo.legs;
  }

  hello() {
    console.log(
      `Hello, i have an ${this.type} with ${this.legs} legs and ${this.age} years old`
    );
  }
}

/**
 * See {@link Person}
 */
const myNewAnimal = new Animal({
  age: 6,
  legs: 4,
  type: dog,
});

/**
 *
 * @param {number} a - to be added with second parameter
 * @param {number} b - to be added with first parameter
 * @returns {number} - Total of parameters added together
 */
const sumExample = (a, b) => {
  return a + b;
};

/**
 * Person Object
 * @type {{id: number|string, name: string, age: number, gender: string}}
 */
const personObj = {
  id: 1,
  name: "John doe",
  age: 26,
  gender: "male",
};
