var titanic = new Titanic({hover:false});
var animatedImages = ["cheap", "trash", "cloud"]
var container = document.createElement('div')
var row = document.createElement('div')
container.className = "container"
row.className = "row"
for(var i = 0; i < 3; i++)
{
  var smallContainer = document.createElement('div')
  smallContainer.className = "col roundedContainer text-center"
  var h2 = document.createElement('h2')
  h2.innerHTML = "Price";
  var animatedImage = document.createElement('div')
  animatedImage.className = "titanic titanic-"+ animatedImages[i] + " icon";
  animatedImage.id = animatedImages[i]
  smallContainer.append(h2)
  smallContainer.append(animatedImage)
  row.append(smallContainer)
}
container.append(row)
document.body.append(container)

$(".roundedContainer").on({

    mouseenter: function () {
       titanic.on($(this).children()[1].id);
    },
    mouseleave: function () {
       titanic.off($(this).children()[1].id);
    }
});
