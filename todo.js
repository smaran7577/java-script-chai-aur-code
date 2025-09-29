let todo=[];

let lis = prompt("enter your request (add, list, delete, quit)");

while (true) {
  if (lis === "quit") {
    console.log("Exiting...");
    break;
  } else if (lis === "add") {
    let task = prompt("enter element for add");
    todo.push(task);
    console.log("task added");
  } else if (lis === "list") {
    console.log("------ Todo List ------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i + ": " + todo[i]);
    }
    console.log("-----------------------");
  } else if (lis === "delete") {
    let idx = prompt("enter index to delete");
    idx = Number(idx);
    if (idx >= 0 && idx < todo.length) {
      console.log("Removed: " + todo.splice(idx, 1));
      console.log("deleted");
    } else {
      console.log("Invalid index");
    }
  } else {
    console.log("Unknown command");
  }

  lis = prompt("enter your next request (add, list, delete, quit)");
}