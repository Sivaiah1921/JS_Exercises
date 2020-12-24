// Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.


class Group {
    constructor () {
      this.groups = [];
    }
    
    add(value) {
      if (!this.has(value)) {
        this.groups.push(value);
      }
    }
    
    delete(value) {
      if (this.has(value)) {
            this.groups = this.groups.filter(el => el !== value);
      }
    }
    
    has(value) {
        return this.groups.includes(value);
    }
    
    static from(arr) {
        let g = new Group();
        for (let num of arr) {
            g.add(num);
        }

        return g;
    }
  }
  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false
