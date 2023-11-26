import { fromEvent } from "rxjs";

const button = <HTMLButtonElement>document.querySelector("button");
fromEvent(button, "click")
    .subscribe(
        () => console.log("clicked")
    );
