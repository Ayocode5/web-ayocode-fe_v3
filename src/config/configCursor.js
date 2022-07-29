import cursorDot from 'cursor-dot';


const registerCursor = () => {
    const cursor = cursorDot({
        easing: 4
    });

    cursor.over('.tagline-text', {
        background: '#000'
    });
}

export default registerCursor;