/**
 * @class DemoController
 * @classdesc
 * @ngInject
 */
function DemoController($log, $state, $localStorage,
    cfg, UserService, IdentityService) {

  var ctl = this;
  
  ctl.reset = function() {
    $localStorage.$reset(cfg);
  };
  
  ctl.user = IdentityService.getCurrent();

  ctl.users = UserService.getUsers();
  
  ctl.setCurrent = function() {
    IdentityService.setCurrent(ctl.user);

    if(ctl.user.role === 'captive') {
      $state.go('demo.captivePolicyList');
    }
    else if(ctl.user.role === 'affiliate') {
      $state.go('demo.affiliatePolicyList');
    }
    else if(ctl.user.role === 'bank') {
      $state.go('demo.transactionList');
    }
    else {
      $state.go('demo.policyList');
    }
  };

}

angular.module('demoController', [])
.controller('DemoController', DemoController);