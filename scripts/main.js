$(document).ready(function() {

	$('header').append('<h1>Higher Order Function Practice</h1>');
	$('body').append('<div id="welcome"><p>This website was built to help you refine your understanding of '
		+ 'Higher Order Functions in JavaScript.  I suggest copying the text in the input fields into your text '
		+ ' editor of choice to build your function there and then paste in your function to test it.  '
		+ 'To start you must complete the each function below, so that you can understand how to use the each '
		+ ' function that will be provided to you to use in the other functions you will make.  Once you have '
		+ 'successfully completed the each function you will be asked what other functions you would like to '
		+ 'attempt.  Have fun!</p></div>');
	$('body').append('<div id="forCode"></div>')

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
			$('#eachFun').remove();
			$('#welcome').append('<h2>Great job with the each function!</h2>');
			$('#welcome').append('<p>Now you can pick which of the availiable functions below you would like to attempt!</p>');
			buildChecklist(methods);
			$('#welcome').append('<button id="generate">Generate!</button>');

			mainFun();

		} else {
			$('#eachFun').append('<p>Failed!</p>');
		}
	});

	
	function mainFun() {
		$('#generate').click(function () {
			var methodsToPractice = [];

			$('input:checkbox[name=methods]:checked').each(function(){
			    methodsToPractice.push($(this).val());
			});

			$('#forCode').prepend('<div id="eachCode"><h3>This is the each function that will be used in your code.</h3>' +
				'<img src="images/each.png"></div>')

			_.each(methodsToPractice, function(element) {
				buildExercise(element);
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

	function buildChecklist(array) {
		$('#welcome').append('<div id="checklist"></div>')
		_.each(array,function(element,index,list) {
			$('#checklist').append('<input type="checkbox" name="methods" value="' + element + '">' + capFirst(element));
		})
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
		$('#forCode').append('<div id="' + str + 'Fun"></div>');
		$('#' + str + 'Fun').append('<h2>' + capFirst(str) + '</h2>');
		$('#' + str + 'Fun').append('<textarea id="' + str + 'CodeBlock">function ' + str + '() {\n\t// Your Code Here!\n}</textarea>');
		$('#' + str + 'Fun').append('<button id="' + str + 'Check">Check ' + capFirst(str) + '</button>');
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