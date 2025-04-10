import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);

  const role:string="admin123";
  if(role!=="admin"){
    router.navigate(['/notFound']);
    return false;
  }
  return true;
};
