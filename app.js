const shareIcon = document.querySelectorAll('.tile-share-icon')
console.log(shareIcon)
async function copyText(e) {
//prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
   try {
         await navigator.clipboard.writeText(link)
         alert("Copied the text: " + link)
     } catch (err) {
         console.error(err)
     }
 }
shareIcon.forEach(shareIcon => shareIcon.addEventListener('click', copyText))