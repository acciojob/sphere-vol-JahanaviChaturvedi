function volume_sphere(event) {
	//write your code here
    event.preventDefault();
    const radiusInput = document.getElementById('radius').value;
    const radius = parseFloat(radiusInput);
    if (isNaN(radius) || radius < 0) {
        document.getElementById('volume').value = 'NaN';
        return;
    }
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    const roundedVolume = volume.toFixed(4);
    document.getElementById('volume').value = roundedVolume;
}

window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};