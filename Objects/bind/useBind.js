




const bird = {
  spacie: 'Canary',
  legs: 2,
  dataBird: function () {
    return `${this.spacie} ${this.legs}`
  }
}

const myBird = bird.dataBird.bind(bird);

console.log(myBird());



