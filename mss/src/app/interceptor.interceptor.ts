import { HttpInterceptorFn } from '@angular/common/http';

export const interceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const df=req.clone({
    method:'post',
    body:{product:'hello'}
  })
  const f=new Headers({
    method:'post',
    RequestMethod:'POST'

  })
  return next(df);
};
