let mainImage = document.querySelector('.c-main-img img');
let mainImageSrc = mainImage.getAttribute('src')
let mainMenuImages = document.querySelectorAll('.c-img img');
let imageModel = document.querySelector('.p-model-container');
let videoModel = document.querySelector('.p-model-container-video');
let cutIMBtn = document.querySelector('.btn i');
let cutVMBtn = document.querySelector('.btn-video i');
const bodyContainer = document.querySelector('.body-container');
const mainCard = document.querySelector('.c-body');
const imageNIBtn = document.querySelector('.navbar .image-div a');
const imageNVBtn = document.querySelector('.navbar .video-div a');
const videoNIBtn = document.querySelector('.navbar-video .image-div-video a');
const videoNVBtn = document.querySelector('.navbar-video .video-div-video a');
const video = document.querySelector('.main-video video');



//image model
let iModelMainImage = document.querySelector('.p-main-image-container .main-image img');
let iModelAllImages = document.querySelectorAll('.menu-images .img img');
let iModelImagesDiv = document.querySelectorAll('.menu-images .img');

//listning if you clicked on images displayed on sidebar
mainMenuImages.forEach(menuImage => {
    menuImage.addEventListener('mouseover', (e) => {
        mainImageSrc = menuImage.getAttribute('src')
        mainImage.setAttribute('src', mainImageSrc)
    })
})

//opening model if you click on main image
mainImage.addEventListener('click', (e) => {

    console.log(document.body.clientWidth)

    if(document.body.clientWidth <= 768){

        mainCard.classList.add('closed')
        mainCard.classList.remove('open')
        console.log(document.querySelector('.container'))
        document.querySelector('.container').style.display = 'block'
        document.querySelector('.container').style.backgroundColor= '#fff';
        document.querySelector('.mobile-model-container').style.display = 'block'
        mainCard.style.display = 'none';
        bodyContainer.style.display = 'none'
    }

    if(document.body.clientWidth > 768){

        mainCard.classList.add('closed')
        mainCard.classList.remove('open')
        mainCard.style.display = 'none';   
        imageModel.style.display = 'grid';
        iModelMainImage.setAttribute('src', mainImageSrc)

        iModelImagesDiv.forEach(div => {

            div.style.border = '1px solid var(--gray-500)'
            
            if (div.firstElementChild.getAttribute('src') === `${mainImageSrc}`)
                div.firstElementChild.parentElement.style.border = '1px solid #111'
         })
    }

    bodyContainer.style.background = '#fff';

    document.body.style.background = '#fff';

})

iModelAllImages.forEach(image => {
    image.addEventListener('click', (e) => {
        iModelMainImage.setAttribute('src', image.getAttribute('src'))
        iModelImagesDiv.forEach(div => {
            div.style.border = '1px solid var(--gray-500)'
        })
        image.parentElement.style.border = '1px solid #111';
    })
})


cutIMBtn.addEventListener('click', (e) => {

    imageModel.style.display = 'none';

    mainCard.style.display = 'grid';

    mainCard.classList.add('open')

    mainCard.classList.remove('closed')

    bodyContainer.style.background = 'var(--gray-300)'

    document.body.style.background = 'var(--gray-300)';

})

cutVMBtn.addEventListener('click', (e) => {

    imageModel.style.display = 'none';

    videoModel.style.display = 'none';

    mainCard.style.display = 'grid';

    mainCard.classList.add('open')

    mainCard.classList.remove('closed')

    video.pause()

    bodyContainer.style.background = 'var(--gray-300)'

    document.body.style.background = 'var(--gray-300)';
})

//checking for video model
imageNVBtn.addEventListener('click', (e) => {

    videoModel.style.display = 'grid'

    imageModel.style.display = 'none'

    video.play()
})

videoNIBtn.addEventListener('click', (e) => {

    videoModel.style.display = 'none'

    imageModel.style.display = 'grid'

    video.pause()
})

//playing video on onclick event

const deskVideos = Array.from(document.querySelectorAll('.video img'))
const deskPlayingVideo = document.querySelector('.main-video video')
const videoThumbnailParent = Array.from(document.querySelectorAll('.video'))



deskVideos.forEach(video => {

    video.addEventListener('click', (e) => {

        e.preventDefault()

        mainVideoUri = video.getAttribute('id')

        deskPlayingVideo.setAttribute('src', mainVideoUri)

        deskPlayingVideo.setAttribute('autoplay', 'autoplay')


        videoThumbnailParent.forEach(videoParent => {


            if (videoParent.children.length > 1 && videoParent.querySelector(".playingVideo") != null) {

                const removeElement = document.querySelector('.playingVideo')

                videoParent.style.border = '2px solid #e481a7'

                videoParent.removeChild(removeElement)

            }
            else {

                console.log("It does not had playing tag")

            }


        })

        //console.log(video.parentElement)

        video.parentElement.appendChild(getH3Element())
        video.parentElement.style.border = '2px solid var(--gray-300)'

    })
})

function getH3Element() {

    let h3 = document.createElement('h3')

    let h3Text = document.createTextNode('Now Playing')

    h3.appendChild(h3Text)

    h3.classList.add('playingVideo')

    return h3;
}





document.body.onload = function () {

    deskVideos.forEach(video => {

        if (video.getAttribute('id') === deskPlayingVideo.getAttribute('src')) {

            video.parentElement.appendChild(getH3Element())

            video.parentElement.style.border = '2px solid var(--gray-300)'
        }

    })


    console.log('video Container loaded')
}


    
   


    // if(mainCard.classList.contains('closed') && window.innerWidth <= 768){
    //     mainCard.style.display = 'none'
    //     bodyContainer.style.display = 'none'
    //     imageModel.style.display = 'none'
    //     videoModel.style.display = 'none'
    //     console.log("yes less than 768 but model closed")
    //     document.querySelector('.container').style.display = 'block'
    //     document.querySelector('.mobile-model-container').display = 'clock'
    // }

    // if(mainCard.classList.contains('closed') && window.innerWidth >= 768){
    //     // mainCard.style.display = 'none'
    //     // bodyContainer.style.display = 'none'
    //     // imageModel.style.display = 'grid'
    //     // videoModel.style.display = 'grid'
    //     console.log("yes less than 768 but model closed")
    //     document.querySelector('.container').style.display = 'none'
    //     document.querySelector('.mobile-model-container').display = 'none'
    // }
