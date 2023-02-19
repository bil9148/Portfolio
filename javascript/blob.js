document.addEventListener('DOMContentLoaded', () => {

    if (navigator.maxTouchPoints === 0) {
        const blob = document.getElementById("blob");
        const container = document.getElementById('container');

        document.body.onpointermove = event => {

            blob.disabled = false;
            blob.style.display = 'block';

            const { clientX, clientY } = event;

            const containerRect = container.getBoundingClientRect();

            const left = Math.max(containerRect.left, Math.min(clientX, containerRect.right));
            const top = Math.max(containerRect.top, Math.min(clientY, containerRect.bottom));

            blob.style.left = `${left}px`;
            blob.style.top = `${top}px`;

            blob.animate({
                left: left + 'px',
                top: top + 'px'
            }, { duration: 3000, fill: "forwards" });
        }
    }
});