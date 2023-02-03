

class Room {
    constructor(name) {
      this._name = name;
      this._description = "";
      this._linkedRooms = {};
      this._character = "";
      this._bgimage = "";
      this._item = "";
    }
  
    get name() {
      return this._name;
    }
  
    get description() {
      return this._description;
    }
    
    get character() {
      return this._character;
    }
    
    get item(){
      return this._item;
    }

    set bgimage(value){
       this.bgimage = value;
    }

    set item(value){
      this._item = value;
    }

    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
    set description(value) {
      if (value.length < 4) {
        alert("description is too short.");
        return;
      }
      this._description = value;
    }
  
    set character(value) {
      this._character = value;
    }
  
    describe() {
      return "Looking around the " + this._name + " you can see that " + this._description;
    }
  
    
    linkRoom(direction, roomToLink) {
      this._linkedRooms[direction] = roomToLink;
    }
  
    
    getDetails() {
      const entries = Object.entries(this._linkedRooms);
      let details = [];
    console.log(this._linkedRooms)
        //

      for (const [direction, room] of entries) {
        let text = " To the " + direction + " of you lies " + room._name;
        details.push(text);
      }
      return details;
    }
  
    //method to move to a new room
    // move will take in north, east, south, west

    //input "north"
    //output the room which is to the north of current location
    

    usInput(direction) {
      if (direction in this._linkedRooms)  {
        return this._linkedRooms[direction];
      }
    }
  }
  

  class Item {
    constructor(name, state) {
      this._name = name,
      this._description = "",
      this._state = state
    }
  
    set name(value) {
      this._name = value;
    }
  
    set description(value) {
      this._name = value;
    }

    set state(value){
      this._state = value;
    }
  
    get name() {
      return this._name;
    }
  
    get description() {
      return this._description;
    }
  
    /**
     * a method to produce friendly item description
     * 
     * @returns {string} description of the item
     * @author Neil Bizzell
     * @version 1.0
     */
    describe() {
      return "The " + this._name + " is " + this._description;
    }
  
  
  }
  

  class Character {
    constructor(name) {
        this._name = name,
        this._description = ""
        this._conversation = ""
        this._item = ""
    }
    set name(value) {
      this._name = value;
    }
  
    set description(value) {
      this._description = value;
    }
  
    set conversation(value) {
      this._conversation = value;
    }
    get name() {
      return this._name;
    }
  
    get description() {
      return this._description;
    }
  
    get conversation() {
      return this._conversation;
    }
    /**
     * a method to produce friendly character description
     * 
     * @returns {string} description of the character
     * @author Neil Bizzell
     * @version 1.0
     */
    describe() {
      return "You have met " + this._name + ", " + this._name + " is " + this._description;
    }
  
    /**
     * a method to produce friendly conversation text
     * 
     * @returns {string} the conversation text
     * @author Neil Bizzell
     * @version 1.0
     */
    converse() {
      return this._name + " says " + "'" + this._conversation + "'";
    }

}

const Wizard1 = new Character("Wizard")
Wizard1.conversation = "How dare ye trespass in mine own domain. Fetch me my arcane scroll and magic potion and I MAY not turn you into a tin of beans"
Wizard1.description = "smelling rather stale for this time of day"
const Wizard2 = new Character("Wizard")
Wizard2.description = "just as smelly as before and also rather angry"
const OddTree = new Character("Tree")
OddTree.conversation = "....... (he's rather quiet as trees go)"
OddTree.description = "a tree, pretty dead one infact."
const Goblin = new Character("Man behind counter")
Goblin.conversation = "Gee whizz, I sure do wish I hadn't lost my commemorative 2012 London Olympics coin"

///////////////////////////////////// Room vars

const ForestEntrance = new Room("Entrance");
ForestEntrance.description = "before you is a particularly uninviting set of woods, google maps says this will shave off a good 20 minutes on your route to McDonalds. Dare ye enter?";
ForestEntrance._bgimage = "images/entrance.png"
const ForestClearing = new Room("a Clearing in the Forest")
ForestClearing.description = "you come into a clearing, you notice a scruffy looking man in a wizards hat. Unfortunately, he also notices you.";
ForestClearing._bgimage = "images/wizard1.png"
const ForkRoad = new Room("Fork in the Road")
ForkRoad.description = "you come across a forked path ahead of you. The voice in your head tells you that you can go east or west."
ForkRoad._bgimage = "images/crossroad.png"
const MoonlitCopse = new Room("Exposed Copse")
MoonlitCopse.description =  "going east, you come across a lonely looking tree. Glinting at you from the bushes, you see a 2012 London Olympics Commemorative Coin. You almost don't pick it up."
MoonlitCopse._bgimage = "images/lonelycopse1.png"
const FSouthWest = new Room("South Western Portion")
FSouthWest.description = "you get the vague sensation you're in a south western portion of the forest, you believe it. You can see something more appealing up ahead."
FSouthWest._bgimage = "images/swest.png"
const OldeShoppe = new Room("Convenient Spar")
OldeShoppe.description = "as you approach you discover a very conveniently located Spar. Where's the harm in stepping inside?"
OldeShoppe._bgimage = "images/shoppe.png"
const ShoppeInner = new Room("Inside the Spar")
ShoppeInner.description = "you enter the Spar, a charming hobgoblin greets you from the counter'"
ShoppeInner._bgimage = "images/spar2.png"
const ForestHeart = new Room("Heart of the Forest")
ForestHeart.description = "the centre of the forest, you feel a sense of calm and peace. You also don't feel like there's much worth doing here."
ForestHeart._bgimage = "images/forestheart.png"
const deadTree = new Room("Dead Tree")
deadTree.description = "You come across a long dead tree. You spot something hanging out of it"
deadTree._bgimage = "images/deadtree.png"
const wizardShack = new Room("In the shack")
wizardShack._bgimage = "images/innershack.png"
const escaped = new Room("Exit Path")
escaped.description = "Success, with every footstep the outside world and a McDouble grow ever closer. Congratulations, you escaped!"
escaped._bgimage = "images/success.gif"
const Failure = new Room("Failure")
Failure.description = "You have failed to escape the forest."
Failure._bgimage = "failed.gif"

//////////////////////////////////////  Room links

ForestEntrance.linkRoom("north", ForestClearing);
ForestClearing.linkRoom("north", ForkRoad);
ForestClearing.linkRoom("south", ForestEntrance);
ForkRoad.linkRoom("east", MoonlitCopse);
ForkRoad.linkRoom("west", FSouthWest);
MoonlitCopse.linkRoom("west", ForkRoad);
FSouthWest.linkRoom("east", ForkRoad);
FSouthWest.linkRoom("north", OldeShoppe);
OldeShoppe.linkRoom("south", FSouthWest);
OldeShoppe.linkRoom("west", ForestHeart);
OldeShoppe.linkRoom("north", ShoppeInner);
ShoppeInner.linkRoom("south", OldeShoppe);
ForestHeart.linkRoom("east", OldeShoppe);
ForestHeart.linkRoom("west", deadTree);
ForestHeart.linkRoom("north", wizardShack);
deadTree.linkRoom("east", ForestHeart);
wizardShack.linkRoom("south", ForestHeart);
wizardShack.linkRoom("north", escaped);

ForestClearing.character = Wizard1;
ShoppeInner.character = Goblin;
deadTree.character = OddTree;
wizardShack.character = Wizard2;


//////////////////////////////////////  Item vars
// state 0 = not collected, state 1 = collected, state 2 = used


const dodgyMag = new Item("Sticky Arcane Scroll")
dodgyMag.description = "The 'Arcane scroll' the wizard was after, it is headed with 3 X's and features scantily clad witches wrestling on the cover"
dodgyMag._state = 0;
const buckFast = new Item("Magic Potion")
buckFast.description = "The 'Magic Potion' the wizard asked for, it's still fizzing and the label calls it a caffeinated tonic wine"
buckFast._state = 0;
const uselessCoin = new Item("2012 Olympic Coin")
uselessCoin.description = "A near on worthless commemorative coin from the 2012 London Olympics. Perhaps someone else will appreciate it more than you do."
uselessCoin._state = 0;
OldeShoppe._item = dodgyMag;
deadTree._item = buckFast;
MoonlitCopse._item = uselessCoin;


inventory = [];
inventory.push(dodgyMag);
inventory.push(buckFast);
inventory.push(uselessCoin);
  
    

 /**
   * Subroutine to display information about the current room
   * 
   * @param {object} room the room to be displayed
   * @author Neil Bizzell
   * @version 1.0 
   */
 function displayRoomInfo(room) { ///////////////////////////////////
    let occupantMsg = ""
    if (room.character === "") {
      occupantMsg = ""
    } else {
      occupantMsg = room.character.describe() + ". " + room.character.converse()
    }
  
    textContent = "<p>" + room.describe() + "</p>" + "<p>" +
      occupantMsg + "</p>" + "<p>" + room.getDetails() + "</p>";
  
    document.getElementById("textarea").innerHTML = textContent;
    document.getElementById("usertext").innerHTML = '><input type="text" id="usertext" />';
    document.getElementById("usertext").focus();
    document.getElementById("bgimage").src = room._bgimage;
  }
  
  /**
   * Subroutine to complete inital game set up then handle commands from the user
   * 
   * @author Neil Bizzell
   * @version 1.0
   */
  function startGame() {
    //set and display start room
    currentRoom = ForestEntrance;
    console.log (currentRoom);
    displayRoomInfo(currentRoom);
  
    /////////////////////////////////////// Victory and Failure conditions
  function failure() {
    alert("The wizard has turned you into a tin of beans")
    currentRoom = Failure
    document.getElementById("usertext").classList.add("hidden")
    let failureMessage = "<p>" + "You did not manage to escape the forest" + "</p>" + "<p>" + "Press below to try again" + "</p>"
    document.getElementById("textarea").innerHTML = failureMessage
    document.getElementById("imgholder").innerHTML = "<img id='bgimage' src='images/failed.gif' alt='failed'>";
    document.getElementById("details").insertAdjacentHTML("beforeend", "<input id='reset' type='button' value='Refresh' onclick='window.location.reload()'>");
  }
console.log(inventory)
  //////////////////////////////////////
    //handle commands
    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        command = document.getElementById("usertext").value;
        const commands = ["north", "south", "east", "west", "take", "give"]
        if (commands.includes(command.toLowerCase())) {
          currentRoom = currentRoom.usInput(command)
          displayRoomInfo(currentRoom);
        } else {
          document.getElementById("usertext").value = ""
          alert("that is not a valid command please try again")
        } 
        if (command.toLowerCase() === "take") {
          document.getElementById("usertext").value = ""
          currentRoom._item._state = 1}
          if (currentRoom === ShoppeInner) { 
            if (command.toLowerCase() === "give") {
              if (uselessCoin._state === 1) {
            if (currentRoom === ShoppeInner) {
            Goblin.conversation = "You found my coin! Thank you, take this dodgy scroll I found by the bins"
            dodgyMag._state = 1;
            uselessCoin._state = 2;}}}}
        }
      
        console.log(inventory)
         if (currentRoom === wizardShack) { // will be for fighting the wizard
            if (dodgyMag._state === 1 && buckFast._state === 1) {
              Wizard2.conversation = "You have brought me what I asked for, I will permit you to pass. Do not let the metaphorical door hit you on the way out."
              currentRoom = escaped
              displayRoomInfo(currentRoom);}
           if (dodgyMag._state === 0 && buckFast._state === 0) {
              Wizard2.conversation = "You have ignored my polite request, make your peace ne'erdowell!"
                setTimeout(function(){ failure() }, 3000);
            }
        if (currentRoom === ShoppeInner) {
          if (uselessCoin._state === 1) {
            
            console.log(inventory)
          }}
            if (uselessCoin._state > 0) {
              MoonlitCopse._bgimage = "images/lonelycopse2.png"
              inventory.push(uselessCoin)
             }
                   
                   if (buckFast._state > 0) {
                    deadTree._bgimage = "images/deadtree2.png"
                  inventory.push(buckFast)}
                     
        
    };
    });
  }
  startGame();