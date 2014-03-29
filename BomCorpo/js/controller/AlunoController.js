/*
 * IMC Controller
 */
 alunoApp.controller('alunoController', function($scope) {
 	//It should be coming from a service or DAO
 	$scope.list = [
 		// {id: 1, aluno:"Éder Faria", altura:22.12, peso:22.12, imc:22.12},
 	];
	
	$scope.sexo = 'M';

 	$scope.total = function() {
 		var total = 0;
 		
 		/*$scope.list.forEach(function(aluno) {
 			total += aluno.peso;
 		});*/

 		return total;
 	}

 	var i = 1;

 	$scope.addAluno = function() {
 		var aluno = {};
 		aluno.id = i++;
 		aluno.nome = $scope.nome;
 		aluno.altura = parseFloat($scope.altura);
 		aluno.peso = parseFloat($scope.peso);
 		aluno.imc = $scope.imc;
 		aluno.sexo = $scope.sexo;
 		$scope.list.push(aluno);

 		$scope.nome = $scope.altura = $scope.peso = $scope.imc = "";
		$scope.sexo = 'M';
 	}

 	$scope.deleteUser = function (id) {
		for(i=0; i < $scope.list.length;i++){
			if($scope.list[i].id == id){
				//$scope.list.shift();
				$scope.list.splice(i,1);
			}
		}
	}

	$scope.calculaImc = function(){
		if($scope.peso == undefined || $scope.altura== undefined){
			$scope.msg = "Entre peso e altura para calcular imc";
		}else{
		var imc = parseFloat($scope.peso) /( parseFloat($scope.altura) * parseFloat($scope.altura));
		var result = "";
		var sexo = $scope.sexo;
		if(sexo == "M"){
			result 	= " - Homem";
			if(imc < 20.7){
				result += " - Abaixo do peso.";
			}else if(imc >= 20.7 && imc <26.4){
				result += " - Peso normal.";
			}else if(imc >= 26.4 && imc <27.8){
				result += " - Pouco acima do peso.";
			}else if(imc >= 27.8 && imc <31.1){
				result += " - Acima do peso ideal.";
			}else if(imc >= 31.1){
				result += " - Obeso.";
			}
		}else{
			result 	= " - Mulher";
			if(imc <19.1){
				result += " - Abaixo do peso.";
			}else if(imc >= 19.1 && imc <25.8){
				result += " - Peso normal";
			}else if(imc >= 25.8 && imc <27.3){
				result += " - Pouco acima do peso.";
			}else if(imc >= 27.3 && imc <32.3){
				result += " - Acima do peso ideal.";
			}else if(imc >= 32.3){
				result += " - Obeso";
			}
		}
		$scope.imc = parseFloat(imc).toFixed(2) + result;
	}
	}

 });
 
 
 
 