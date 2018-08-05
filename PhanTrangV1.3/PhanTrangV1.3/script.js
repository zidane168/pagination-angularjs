angular.module('plunker', ['ui.bootstrap']);
var PaginationDemoCtrl = function ($scope) {
  $scope.data = [
	  {'id':1,'name':'http://gocbao.com/wp-content/uploads/2017/12/hinh-anh-dep-29.jpeg'},
      {'id':2,'name':'https://vignette.wikia.nocookie.net/dorepedia/images/f/f3/Doraemon02.png/revision/latest?cb=20150516120214&path-prefix=vi'},
      {'id':3,'name':'http://gocbao.com/wp-content/uploads/2017/12/hinh-anh-dep-29.jpeg'},
      {'id':4,'name':'https://vignette.wikia.nocookie.net/dorepedia/images/f/f3/Doraemon02.png/revision/latest?cb=20150516120214&path-prefix=vi'},
      {'id':5,'name':'http://gocbao.com/wp-content/uploads/2017/12/hinh-anh-dep-29.jpeg'},
      {'id':6,'name':'https://vignette.wikia.nocookie.net/dorepedia/images/f/f3/Doraemon02.png/revision/latest?cb=20150516120214&path-prefix=vi'},
      {'id':7,'name':'http://gocbao.com/wp-content/uploads/2017/12/hinh-anh-dep-29.jpeg'},
      {'id':8,'name':'https://vignette.wikia.nocookie.net/dorepedia/images/f/f3/Doraemon02.png/revision/latest?cb=20150516120214&path-prefix=vi'},
      {'id':9,'name':'http://gocbao.com/wp-content/uploads/2017/12/hinh-anh-dep-29.jpeg'},
      {'id':10,'name':'https://vignette.wikia.nocookie.net/dorepedia/images/f/f3/Doraemon02.png/revision/latest?cb=20150516120214&path-prefix=vi'},
	  {'id':11,'name':'http://gocbao.com/wp-content/uploads/2017/12/hinh-anh-dep-29.jpeg'},
      {'id':12,'name':'https://vignette.wikia.nocookie.net/dorepedia/images/f/f3/Doraemon02.png/revision/latest?cb=20150516120214&path-prefix=vi'},
      {'id':13,'name':'http://gocbao.com/wp-content/uploads/2017/12/hinh-anh-dep-29.jpeg'},
      {'id':14,'name':'https://vignette.wikia.nocookie.net/dorepedia/images/f/f3/Doraemon02.png/revision/latest?cb=20150516120214&path-prefix=vi'},
      {'id':15,'name':'http://gocbao.com/wp-content/uploads/2017/12/hinh-anh-dep-29.jpeg'},
      {'id':16,'name':'https://vignette.wikia.nocookie.net/dorepedia/images/f/f3/Doraemon02.png/revision/latest?cb=20150516120214&path-prefix=vi'},
      {'id':17,'name':'http://gocbao.com/wp-content/uploads/2017/12/hinh-anh-dep-29.jpeg'},
      {'id':18,'name':'https://vignette.wikia.nocookie.net/dorepedia/images/f/f3/Doraemon02.png/revision/latest?cb=20150516120214&path-prefix=vi'},
      {'id':19,'name':'http://gocbao.com/wp-content/uploads/2017/12/hinh-anh-dep-29.jpeg'},
      {'id':20,'name':'https://vignette.wikia.nocookie.net/dorepedia/images/f/f3/Doraemon02.png/revision/latest?cb=20150516120214&path-prefix=vi'},
	  {'id':21,'name':'http://gocbao.com/wp-content/uploads/2017/12/hinh-anh-dep-29.jpeg'},
      {'id':22,'name':'https://vignette.wikia.nocookie.net/dorepedia/images/f/f3/Doraemon02.png/revision/latest?cb=20150516120214&path-prefix=vi'},
      {'id':23,'name':'http://gocbao.com/wp-content/uploads/2017/12/hinh-anh-dep-29.jpeg'},
      {'id':24,'name':'https://vignette.wikia.nocookie.net/dorepedia/images/f/f3/Doraemon02.png/revision/latest?cb=20150516120214&path-prefix=vi'},
      {'id':25,'name':'http://gocbao.com/wp-content/uploads/2017/12/hinh-anh-dep-29.jpeg'},
      {'id':26,'name':'https://vignette.wikia.nocookie.net/dorepedia/images/f/f3/Doraemon02.png/revision/latest?cb=20150516120214&path-prefix=vi'},
      {'id':27,'name':'http://gocbao.com/wp-content/uploads/2017/12/hinh-anh-dep-29.jpeg'},
      {'id':28,'name':'https://vignette.wikia.nocookie.net/dorepedia/images/f/f3/Doraemon02.png/revision/latest?cb=20150516120214&path-prefix=vi'},
      {'id':29,'name':'http://gocbao.com/wp-content/uploads/2017/12/hinh-anh-dep-29.jpeg'},
      {'id':30,'name':'https://vignette.wikia.nocookie.net/dorepedia/images/f/f3/Doraemon02.png/revision/latest?cb=20150516120214&path-prefix=vi'},
	  {'id':31,'name':'http://gocbao.com/wp-content/uploads/2017/12/hinh-anh-dep-29.jpeg'},
      {'id':32,'name':'https://vignette.wikia.nocookie.net/dorepedia/images/f/f3/Doraemon02.png/revision/latest?cb=20150516120214&path-prefix=vi'},
      {'id':33,'name':'http://gocbao.com/wp-content/uploads/2017/12/hinh-anh-dep-29.jpeg'},
      {'id':34,'name':'https://vignette.wikia.nocookie.net/dorepedia/images/f/f3/Doraemon02.png/revision/latest?cb=20150516120214&path-prefix=vi'},
      {'id':35,'name':'http://gocbao.com/wp-content/uploads/2017/12/hinh-anh-dep-29.jpeg'},
      {'id':36,'name':'https://vignette.wikia.nocookie.net/dorepedia/images/f/f3/Doraemon02.png/revision/latest?cb=20150516120214&path-prefix=vi'},
      {'id':37,'name':'http://gocbao.com/wp-content/uploads/2017/12/hinh-anh-dep-29.jpeg'},
      {'id':38,'name':'https://vignette.wikia.nocookie.net/dorepedia/images/f/f3/Doraemon02.png/revision/latest?cb=20150516120214&path-prefix=vi'},
      {'id':39,'name':'http://gocbao.com/wp-content/uploads/2017/12/hinh-anh-dep-29.jpeg'},
      {'id':40,'name':'https://vignette.wikia.nocookie.net/dorepedia/images/f/f3/Doraemon02.png/revision/latest?cb=20150516120214&path-prefix=vi'},
  ];
 
  $scope.viewby = 5; 
  $scope.totalItems = $scope.data.length;
  $scope.currentPage = 1; // vị trí 
  $scope.itemsPerPage = $scope.viewby;
  $scope.maxSize = 4;     // Số lượng button  
  
  $scope.pageChanged = function() {
    console.log('Page changed to: ' + $scope.currentPage);
  };
  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };
  // Set item/page
  $scope.setItemsPerPage = function(num) {
  $scope.itemsPerPage = num;
  $scope.currentPage = 1;  
}
	 
 
};