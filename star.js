        module.directive('pippoStar', [function(){
            return {
                restrict: 'E'
                , replace: true,
                template: '<div id="selectStar">'+
                    '</div>'
                ,
                scope: {
                    readOnly: '=',
                    score: '='
                },
                link: function(scope, element, attrs) {
                    if(angular.isUndefined(scope.score)||scope.score == ""){
                        scope.score = 0;
                    }
                        $('#selectStar').raty({
                            path: "img/",
                            starOff: 'star-off-big.png',
                            starOn: 'star-on-big.png',
                            number: 5,
                            score: scope.score,
                            readOnly:  scope.readOnly,
                            targetKeep : true,//targetKeep 属性设置为true，用户的选择值才会被保持在目标DIV中，否则只是鼠标悬停时有值，而鼠标离开后这个值就会消失
                            click: function (score, evt) {
                                scope.score=score;
                                scope.$root.$$phase || scope.$apply();  //避免$digest already in progress
                                //alert('你的评分是'+score+'分');
                            }
                        });
                }
            };
        }]);