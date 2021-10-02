
 **Capabilities**
* Capabilities are just Directives that dynamically create a component,
* each directive responsible to instantiate a specific component.
* you can specify where you want the component to be embedded
  the default is the element in which the directive is place on 
  
Example: 
```angular2html
* OnDone & onValueChange are events
  that are emitted from the capabilities directive.
* You can listen to those events in one place as following
  <lib-filter-chips-form [data]="data" 
                         (onDone)="done()" 
                         (onValueChange)="addFilter(event)" 
                         [freeTextQuery]="attachFilterTo">
   </lib-filter-chips-form>

* you can specify the place to embed the component view
   <ng-container #filtersVCR></ng-container>
 ```

Here is the first POC made with this feature.
[download video](https://github.com/tedwin007/QL-Filters/blob/main/assets/poc.mp4?raw=true)
