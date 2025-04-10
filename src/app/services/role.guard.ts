import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const role:string="user1";

  if(role!=="user"){
    alert("You dont have the access");
    router.navigate(['notFound']);
    return false;
  }
  return true;
};
