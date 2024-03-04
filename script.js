const names = ['Ashley', 'Beth', 'Cooper', 'Dave', 'Ellie', 'Frank', 'Gale', 'Hannah', 'Ivy', 'Jeff'];


function getName() {
    let name = Math.floor(Math.random() * names.length);
    return names[name];
}