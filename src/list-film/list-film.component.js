'use strict';
angular.
  module('listFilm').
  component('listFilm', {
    templateUrl: 'list-film/list-film.component.html',
    
  });


  angular.module('listFilm').controller('listFilmController', function($scope) {
    $scope.films = [
      {name:'Velozes e Furiosos', year: "2005", gender:"Ação"},
      {name:'Harry Potter', year: "2000", gender: "Fantasia"},
      {name:'Toy Story', year: "2008", gender: "Desenho"}
    ];


    $scope.createOrUpdate = function (type, index){
        console.log(index)
        if(type == 'new') {
            $scope.newFilm = {}
            $scope.films.push($scope.newFilm)
        }else {
            $scope.newFilm = $scope.films[index]
           $scope.films[index] = $scope.newFilm
        }
    }

    $scope.delete = function (index){      
        $scope.films.splice(index, 1)
    }
   
    
    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget)
        var filmData = button.data()
        var modal = $(this)

       if(filmData.type == "new"){
           index = null
       }else {
           index = filmData.index
       }

        $scope.createOrUpdateButton = $scope.createOrUpdate(filmData.type, index)
       

        if(filmData.type == 'new'){   
            var index = ""         
            var buttonName = 'Salvar novo filme';
            var titleFilm = 'Novo filme';
            modal.find('.modal-body input#film-name').val("")
            modal.find('.modal-body input#film-year').val("")
            modal.find('.modal-body input#film-gender').val("")
        }else {
            var index = filmData.index
            var buttonName = 'Alterar filme';
            var titleFilm = filmData.film.name;            
            modal.find('.modal-body input#film-name').val(filmData.film.name)
            modal.find('.modal-body input#film-year').val(filmData.film.year)
            modal.find('.modal-body input#film-gender').val(filmData.film.gender)
        }
        
        modal.find('.modal-title').text(titleFilm)
        modal.find('.modal-footer button.btn.btn-primary').text(buttonName)



      })
  });
