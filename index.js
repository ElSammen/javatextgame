

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
    

    move(direction) {
      if (direction in this._linkedRooms) {
        return this._linkedRooms[direction];
      } else {
        alert("You can't go that way",);
        alert(this._name)
        return this;
      }
    }
  }
  

  class Item {
    constructor(name) {
      this._name = name,
        this._description = ""
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
        alert("Decription is too short.");
        return;
      }
      this._name = value;
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
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
    set description(value) {
      if (value.length < 4) {
        alert("Decription is too short.");
        return;
      }
      this._description = value;
    }
  
    set conversation(value) {
      if (value.length < 4) {
        alert("conversation is too short.");
        return;
      }
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
Wizard1.description = "wearing a crooked purple hat, he has yellow bleary eyes, and you detect a strong odour of stale urine"
const Wizard2 = new Character("Potion Drunk Wizard", "Even more crooked hat, angry yellow eyes, overwhelming stench of urine", "Ha-ha, you fool! You fell victim to one of the classic blunders, never trust a wizard in the woods when his bottle of grog and dirty magazines are on the line.")
const OddTree = new Character("Tree")
OddTree.conversation = "....... (he's rather quiet as trees go)"
OddTree.description = "a tree, pretty dead one infact."
const Goblin = new Character("Man behind counter")
Goblin.conversation = "Gee whizz, I sure do wish I hadn't lost my commemorative 2012 London Olympics coin"
Goblin.description = "testststst"

///////////////////////////////////// Room vars

const ForestEntrance = new Room("Entrance");
ForestEntrance.description = "before you lies the entrance to a rather uninviting set of woods, google maps says this will shave off a good 20 minutes on your route to McDonalds. Dare ye enter?";
ForestEntrance._bgimage = "images/entrance.png"
const ForestClearing = new Room("a Clearing in the Forest")
ForestClearing.description = "After a short walk into the woods you come into a clearing, one inhabited by a man unmistakeably a sorceror of some degree. Unfortunately, he also notices you.";
ForestClearing._bgimage = "images/wizard1.png"
const ForkRoad = new Room("Fork in the Road")
ForkRoad.description = "You come across a forked path ahead of you. East or West. You begin to feel like your actions are being scrutinized, but you decide against it."
ForkRoad._bgimage = "images/crossroad.png"
const MoonlitCopse = new Room("Exposed Copse")
MoonlitCopse.description =  "Your eastward journey along the path leads you to a solitary tree. Glinting at you from the bushes, you see a 2012 London Olympics Commemorative Coin. You almost don't pick it up."
MoonlitCopse._bgimage = "images/lonelycopse1.png"
const FSouthWest = new Room("South Western Portion")
FSouthWest.description = "The disembodied voice in your head tells you that you're in the south western portion of the forest. You vaguely see something more interesting further ahead."
FSouthWest._bgimage = "images/swest.png"
const OldeShoppe = new Room("Convenient Spar")
OldeShoppe.description = "As you approach you discover a very conveniently located Spar. Where's the harm in stepping inside?"
OldeShoppe._bgimage = "images/shoppe.png"
const ShoppeInner = new Room("Inside the Spar")
ShoppeInner.description = "You enter the Spar, a charming hobgoblin greets you from the counter'"
ShoppeInner._bgimage = "images/spar.png"
const ForestHeart = new Room("Heart of the Forest")
ForestHeart.description = "the centre of the forest, you feel a sense of calm and peace. You also don't feel like there's much worth doing here."
ForestHeart._bgimage = "images/forestheart.png"
const deadTree = new Room("Dead Tree")
deadTree.description = "You come across a long dead tree. You spot something hanging out of it"
deadTree._bgimage = "images/deadtree.png"
const wizardShack = new Room("Stage of Battle", "You see our pizzy wizzy")
const escaped = new Room("Exit Path")
escaped.description = "Success, with every footstep the outside world and a McDouble grow ever closer. Congratulations, you escaped!"

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

const dodgyMag = new Item("Sticky Arcane Scroll")
dodgyMag.description = "The 'Arcane scroll' the wizard was after, it is headed with 3 X's and features scantily clad witches wrestling on the cover"
const buckFast = new Item("Magic Potion")
buckFast.description = "The 'Magic Potion' the wizard asked for, it's still fizzing and the label calls it a caffeinated tonic wine"
const uselessCoin = new Item("2012 Olympic Coin")
uselessCoin.description = "A near on worthless commemorative coin from the 2012 London Olympics. Perhaps someone else will appreciate it more than you do."
OldeShoppe._item = dodgyMag;
deadTree._item = buckFast;
MoonlitCopse._item = uselessCoin;


inventory = [];

function inventoryManagement(item) {
  if (item === undefined) {
    return "You have nothing in your inventory"
  } else {
    inventory.push(item)
    return "You have picked up " + item.name
  }
  }

function inventoryCheck() {
    if (currentRoom === ShoppeInner) {
      if (inventory.includes(uselessCoin)) {
       Goblin.conversation = "You found my coin! Thank you, take this dodgy scroll I found by the bins"
       inventory.push(dodgyMag)
      }}}

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
  
    //
  
    //handle commands
    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        command = document.getElementById("usertext").value;
        const directions = ["north", "south", "east", "west"]
        if (directions.includes(command.toLowerCase())) {
          currentRoom = currentRoom.move(command)
          displayRoomInfo(currentRoom);
        } else {
          document.getElementById("usertext").value = ""
          alert("that is not a valid command please try again")
        }
        

        
         if (currentRoom === wizardShack) { // will be for fighting the wizard
            if (inventory.includes(dodgyMag) && inventory.includes(buckFast)) {
              document.getElementById("usertext").value = ""
              alert("The wizard is impressed with your offerings and he lets you pass")
              currentRoom = escaped
              displayRoomInfo(currentRoom);
            } else {
              document.getElementById("usertext").value = ""
              alert("The wizard has accosted you and he seems mad you didn't bring what he asked for!")
            }}
       
        
      };
    });
  }
  startGame();