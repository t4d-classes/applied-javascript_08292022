import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// import { Observable, catchError, map, of } from "rxjs";

// let promiseInstances = 0; 
// let observableInstances = 0; 

// const p = new Promise(resolve => {
//   console.log("called promise init: ", ++promiseInstances);
//   setTimeout(() => {
//     resolve('promise a');
//   }, 3000);
// });

// p.then(result => console.log(result));
// p.then(result => console.log(result));
// p.then(result => console.log(result));

// const o = new Observable(subscriber => {
//   console.log("called observable init: ", ++observableInstances);
//   let num = 0;
//   setInterval(() => {
//     subscriber.next(num++);
//   }, 500);
// });

// o.subscribe({
//   next: result => console.log(result),
// });
// o.subscribe({
//   next: result => console.log(result),
// });
// o.subscribe({
//   next: result => console.log(result),
// });


// const o = new Observable<number>(subscriber => {

//   let num = 0;

//   const handle = setInterval(() => {

//     if (subscriber.closed) {
//       clearInterval(handle);
//       return;
//     }

//     // console.log("sending num", num);
//     subscriber.next(num++);
//   }, 500);

//   setTimeout(() => {
//     // clearInterval(handle);
//     // subscriber.complete();

//     subscriber.error("something went wrong");
//   }, 5000);

// });

// const subscription = o.pipe(
//   map(x => x * 2),
//   catchError((err, caught) => {
//     console.log('catch error: ', err);
//     // return caught;
//     return of(999);
//   })
// ).subscribe({
//   next: result => console.log("receiving num", result),
//   error: err => console.error(err),
//   complete: () => {
//     console.log("all done, no more data to receive");
//   }
// });

// setTimeout(() => {
//   subscription.unsubscribe();
// }, 3000);


