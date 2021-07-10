/*
 function main() {
  var orderIds = ["2", "1", "3"];


  var inputArray = [{
          _id: 2,
          name: "element 2"
      },
      {
          _id: 1,
          name: "element 1"
      },
      {
          _id: 3,
          name: "element 3"
      },
  ];

  main()
  // var outputArray = getOrderArray(orderIds, inputArray);
  var sortedArray = sort(inputArray);
  console.log(inputArray);

  var ouputArray = [{
          _id: "1",
          name: "element 1"
      }, {
          _id: "2",
          name: "element 2"
      },
      {
          _id: "3",
          name: "element 3"
      },
  ];

}


function getOrderArray(orderIds, inputArray) {
  var outputArray = [];
  for (var i = 0; i < orderIds.length; i++) {
      for (var j = 0; j < inputArray.length; j++) {
          var id1 = "" + orderIds[i];
          var id2 = "" + inputArray[j]._id;
          if (id1 === id2) {
              outputArray = outputArray.concat([inputArray[j]]);
          }
      }
  }
  return outputArray;
}

function sort(inputArray) {
  var sortedArray = [];
  alert(inputArray[0])
  return sortedArray = [];
}

sort()


function findElementWithMaxId(inputArray) {
  var element;

  return element;
}

 */
