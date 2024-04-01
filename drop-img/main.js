let box = document.querySelector(".main-box");

box.addEventListener("dragover", function(e) {
    e.preventDefault();
});


box.addEventListener("drop", function(e) {
    e.preventDefault();

    let files = e.dataTransfer.files;
    // console.log(files); 

    if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
            let file = files[i];

            if (file.type.startsWith('image/')) {
                let img = new Image();
                img.src = URL.createObjectURL(file); 
                // console.log(img.src);
                img.onload = function() {
                    img.width = 100;
                    img.height = 100;
                    box.appendChild(img);
                };
            }
        }
    }
});
