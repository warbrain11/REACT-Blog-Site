/*
credit to 
https://github.com/codingforentrepreneurs/Try-Reactjs/blob/master/src/learn/ResuableUtils.js
*/

const getCroppedImg = (canvasRef, image64, pixelCrop) =>
{
    const canvas = canvasRef // document.createElement('canvas');
    canvas.width = pixelCrop.width
    canvas.height = pixelCrop.height
    const ctx = canvas.getContext('2d')
    const image = new Image()
    image.src = image64
    image.onload = function () {
      ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
      )
    }

    const base64Image = canvas.toDataURL('image/jpeg, image/png');
    return base64Image;
}

export default getCroppedImg;