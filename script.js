const button = document.getElementById("button");
const videoElement = document.getElementById("video");

// Prompt to select media stream , pass to video element and play
async function selectMediaScreen() {
  try {
    // Screen Capture API
    const captureStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = captureStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("Whoops Error: ", error);
  }
}

button.addEventListener("click", async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture in Picture
  await video.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

// On Load
selectMediaScreen();
