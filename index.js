function newImage(path, left, bottom){
    let image = document.createElement('img')
    image.src = path
    image.style.position = 'fixed'
    image.style.left = left
    image.style.bottom = bottom
    document.body.append(image)
}
function newItem(path, left, bottom) {
    let item = document.createElement('img')
    item.src = path
    item.style.position = 'fixed'
    item.style.left = left
    item.style.bottom = bottom
    document.body.append(item)
item.addEventListener('dblclick', function() {
    item.remove()
})
}
function background(path, left, bottom) {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let horizonDistance = PositionBottom + 5;
    for(let i= 0; i<screenWidth; i++)
    newImage()
    
}


newImage('assets/green-character.gif', '100px', '100px');
newImage('assets/pine-tree.png', '450px', '200px');
newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png', '350px', '100px');
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px');
newItem('assets/sword.png', '500px', '450px');
newItem('assets/sheild.png', '165px', '185px');
newItem('assets/staff.png', '600px', '100px');
