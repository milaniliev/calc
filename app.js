var name = prompt("Name?")

var bob = { 
  first_name: name,
  last_name: "Connor",
  full_name: function(){
    return this.first_name + "🍌 " + this.last_name
  }

}

alert(bob.full_name())