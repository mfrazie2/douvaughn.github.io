$(document).ready(function() {

	$('header').append('<h1>Higher Order Function Practice</h1>');
	$('body').append('<div id="welcome"></div>');

	buildExercise('each');



	var methods = ['map','reduce','find','filter'];

	$('#eachCheck').click(function() {
		var code = $('#eachCodeBlock').val();
		var testData = [[1,2,3,4,5,6,7,8,9],[3,6,34,8,934,56]];

		eval(code);

		function testMap(collection, iteratee) {
			var result = [];

			each(collection,function(element,index,list) {
				result.push(iteratee(element));
			});

			return result;
		}

		var passed = _.every(testData, function(element) {
			if (isEqualArray(_.map(element,multiply5),testMap(element,multiply5))) {
				return true;
			} else {
				return false;
			}
		});
		
		if (passed) {
			$('#eachFun').append('<p>Correct!</p>');
			$('#welcome').append('<p>Pick how many Higher Order Functions you would like to write.</p>');
			$('#welcome').append('<input id="pracNum"><button id="generate">Generate!</button>');

			mainFun();

		} else {
			$('#eachFun').append('<p>Failed!</p>');
		}
	});

	
	function mainFun() {
		$('#generate').click(function () {
			$('body').append('<div id="forCode"><h3>This is the each function that will be used in your code.</h3>' +
				'<img src="images/each.png"></div>')
			var numToPractice = $('#pracNum').val();
			var methodsToPractice = pickMethods(numToPractice);

			_.each(methodsToPractice, function(element) {
				buildExercise(methods[element]);
			})



			$('#filterCheck').click(function() {
				var code = $('#filterCodeBlock').val();
				var testData = [[1,2,3,4,5,6,7,8,9],[3,6,34,8,934,56]];

				eval(code);

				var passed = _.every(testData, function(element) {
					if (isEqualArray(_.filter(element,isEven),filter(element,isEven))) {
						return true;
					} else {
						return false;
					}
				});
				
				if (passed) {
					$('#filterFun').append('<p>Correct!</p>');
				} else {
					$('#filterFun').append('<p>Failed!</p>');
				}
			});

			$('#findCheck').click(function() {
				var code = $('#findCodeBlock').val();
				var testData = [[1,2,3,4,5,6,7,8,9],[3,6,34,8,934,56]];

				eval(code);

				// Figure out how to test find

				var passed = _.every(testData, function(element) {
					if (isEqualArray(_.find(element,isEven),find(element,isEven))) {
						return true;
					} else {
						return false;
					}
				});
				
				if (passed) {
					$('#findFun').append('<p>Correct!</p>');
				} else {
					$('#findFun').append('<p>Failed!</p>');
				}
			});

			$('#reduceCheck').click(function() {
				var code = $('#reduceCodeBlock').val();
				var testData = [[1,2,3,4,5,6,7,8,9],[3,6,34,8,934,56]];

				eval(code);

				var passed = _.every(testData, function(element) {
					if (isEqualArray(_.reduce(element,addTogether),reduce(element,addTogether))) {
						return true;
					} else {
						return false;
					}
				});
				
				if (passed) {
					$('#reduceFun').append('<p>Correct!</p>');
				} else {
					$('#reduceFun').append('<p>Failed!</p>');
				}
			});
		
			$('#mapCheck').click(function() {
				var code = $('#mapCodeBlock').val();
				var testData = [[1,2,3,4,5,6,7,8,9],[3,6,34,8,934,56]];

				eval(code);

				var passed = _.every(testData, function(element) {
					if (isEqualArray(_.map(element,multiply5),map(element,multiply5))) {
						return true;
					} else {
						return false;
					}
				});
				
				if (passed) {
					$('#mapFun').append('<p>Correct!</p>');
				} else {
					$('#mapFun').append('<p>Failed!</p>');
				}

			});

		});
	}

	function addTogether(num1,num2) {
		return num1 + num2;
	}

	function isEqualArray(arr1,arr2) {
		if (arr1.length !== arr2.length) {
			return false;
		} else {
			for (var i = 0; i < arr1.length; i++) {
				if (arr1[i] !== arr2[i]) {
					return false;
				}
			}
			return true;
		}
	}

	function multiply5(num) {
		return num * 5;
	}

	function isEven(num) {
		return num % 2 === 0;
	}

	function capFirst(str) {
		var result = '';
		for (var i = 0; i < str.length; i++) {
			if (i === 0) {
				result += str[i].toUpperCase();
			} else {
				result += str[i];
			}
		}
		return result;
	}

	function buildExercise(str) {
		$('body').append('<div id="' + str + 'Fun"></div>');
		$('#' + str + 'Fun').append('<h2>' + capFirst(str) + '</h2>');
		$('#' + str + 'Fun').append('<textarea id="' + str + 'CodeBlock">function ' + str + '() {\n\n}</textarea>');
		$('#' + str + 'Fun').append('<button id="' + str + 'Check">Check ' + capFirst(str) + '</button>');
	}

	function pickMethods(num) {
		var array = [];
		for (var i = 0; i < num; i++) {
			do {
				var index = Math.floor(Math.random() * methods.length);
			} while (_.contains(array,index));
			array.push(index);
		}
		return array;
	}

	function each(collection, callback) {
		if ( Array.isArray(collection) ) {
			for (var i = 0; i < collection.length; i++) {
				callback(collection[i], i, collection);
			}
		} else {
			for (var key in collection) {
				callback(collection[key], key, collection);
			}
		}
	}
});