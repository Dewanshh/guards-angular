import { CanActivateFn } from '@angular/router';

export const notCompletGuard: CanActivateFn = (route, state) => {
  let response=confirm("Are you sure you want to leave?")
  if(response==true)
  {
    return true;
  }
  return false;
};
