// Do not change any of the function names

function makeCat(name, age) {
  // create a new object with a name property with the value set to the name argument
  // add an age property to the object with the value set to the age argument
  // add a method called meow that returns the string 'Meow!'
  // return the object
  const makeCat = {
    name : 'Snowball',
    age : 1,
    meow : function() {
      return meow;
    };
  }

function addProperty(object, property) {
  // add the property to the object with a value of null
  // return the object
  // note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)
const object = {
  property : null,
}; 
return object; 
}

function invokeMethod(object, method) {
  // method is a string that contains the name of a method on the object
  // invoke this method
  // nothing needs to be returned
  const object = {
    method : function() {

    };
  }
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  // mysteryNumberObject has a property called mysteryNumber
  // multiply the mysteryNumber property by 5 and return the product
  const mysteryNumberObject = {
    mysteryNumber : 999,
    multiplyMysteryNumberByFive : 999 * 5,
  };
  return multiplyMysteryNumberByFive;
}

function deleteProperty(object, property) {
  // remove the property from the object
  // return the object
  const object = {
      x: 1,
      y: 2,
      z: null,
    
  };
  delete object.z;
}

function newUser(name, email, password) {
  // create a new object with properties matching the arguments passed in.
  // return the new object
  const newUser = {
    name : 'Ben',
    email : 'ben@lambdaschool.com',
    password : 'password',
  };
  return newUser;
}

function hasEmail(user) {
  // return true if the user has a value for the property 'email'
  // otherwise return false
  const user = {
    username: 'SunJieMing', 
    email: 'ben@lambdaschool.com',
  };
  if (user === email) {
    return true;
  } else {
    return false;
  }
}

function hasProperty(object, property) {
  // return true if the object has the value of the property argument
  // property is a string
  // otherwise return false
  const object = {
    hasProperty : 'property',
  }
  if (object === 'property') {
    return true;
  } else {
    return false;
  }
}

function verifyPassword(user, password) {
  // check to see if the provided password matches the password property on the user object
  // return true if they match
  // otherwise return false
  const user = {
     password: 'I love js!',
  };
  const password = 'Hack this guy!';
  if (password === 'I love js!') {
    return true;
  } else {
    return false;
  }
}

function updatePassword(user, newPassword) {
  // replace the existing password on the user object with the value of newPassword
  // return the object
  const user = {
    password : 'I love js!',
    
  };
  delete user.password;
  const user = {
    newPassword : 'I love js even more!',
  }
  return user;

}

function addFriend(user, newFriend) {
  // user has a property called friends that is an array
  // add newFriend to the end of the friends array
  // return the user object
  const user = {
    friends : ['Ben', 'Austen', 'Ryan', 'Mike', 'Young'];
    friends.push('Shay');
  }
  return user;
}

function setUsersToPremium(users) {
  // users is an array of user objects.
  // each user object has the property 'isPremium'
  // set each user's isPremium property to true
  // return the users array
   const users = [
      { isPremium: false }, 
      { isPremium: false }, 
      { isPremium: false }, 
      { isPremium: false }, 
      { isPremium: false }, 
    ];
    delete users.isPremium;
     const updatedUsers = [
      { isPremium: true }, 
      { isPremium: true }, 
      { isPremium: true }, 
      { isPremium: true }, 
      { isPremium: true }, 
    ];
    return updatedUsers;
}

function sumUserPostLikes(user) {
  // user has an array property called 'posts'
  // posts is an array of post objects
  // each post object has an integer property called 'likes'
  // sum together the likes from all the post objects
  // return the sum
  const user = {
      username: 'SunJieMing',
      password: 'JavaScript is awesome!',
      posts: [
        {
          id: '1',
          title: 'JS adventures!',
          likes: 10
        },
        {
          id: '2',
          title: 'LambdaSchool forever!',
          likes: 100
        },
        {
          id: '3',
          title: 'What is a JavaScript?',
          likes: 35
        },
        {
          id: '4',
          title: 'JS Objects for dummies',
          likes: 42
        },
        {
          id: '5',
          title: 'Online Education',
          likes: 99
        },
      ],
      postsTotal : likes++;
    }
    return postsTotal;
    };

function addCalculateDiscountPriceMethod(storeItem) {
  // add a method to the storeItem object called 'calculateDiscountPrice'
  // this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  // the method then subtracts the discount from the price and returns the discounted price
  // return storeItem at the end of the function
  // example: 
  // price -> 20
  // discountPercentage -> .2
  // discountPrice = 20 - (20 * .2)
  const storeItem = {
    calculateDiscountPrice: function() {
       const storeItem = {
    price : 80,
    discountPercentage : 0.1,
    discount : 80 * 0.1,
    discounted : 80 - 'discount',
  };
 return discounted;

    }
  }
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  makeCat,
  addProperty,
  invokeMethod,
  multiplyMysteryNumberByFive,
  deleteProperty,
  newUser,
  hasEmail,
  hasProperty,
  verifyPassword,
  updatePassword,
  addFriend,
  setUsersToPremium,
  sumUserPostLikes,
  addCalculateDiscountPriceMethod,
};
