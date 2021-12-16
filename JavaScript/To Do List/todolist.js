let choice = prompt("What would you like to do? ");
const list = []
while (choice !== "quit") {
    if (choice === "new") {
        let toAdd = prompt("Enter new todo: ");
        list.push(toAdd);
        console.log(`${toAdd} added to the list.`)
    }
    else if (choice === "list") {
        if (list.length > 0) {
            console.log("----------------------")
            for (let i = 0; i < list.length; i++) {
                console.log(`${i}: ${list[i]}`)
            }
            console.log("----------------------")
        }
        else {
            console.log("The list is empty.")
        }
    }
    else if (choice === "delete") {
        let deleteIndex = parseInt(prompt("Enter index of todo to delete: "));
        if (!Number.isNaN(deleteIndex)) {
            let deleted = list.splice(deleteIndex, 1);
            console.log(`${deleted[0]} has been removed!`);
        }
        else {
            console.log("Unknown Index!");
        }
    }
    else if (choice === "quit") {
        break;
    }
    else {
        choice = prompt("Invalid choice. Re-enter: ");
    }
    choice = prompt("What would you like to do? ");
}
console.log("YOU QUIT!")