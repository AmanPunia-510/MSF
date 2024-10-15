const ICON_DATA = ({ className, icons }) => {
    const icon = {
        arrow: (
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.74609 1.5L4.99609 5.25L1.24609 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        horizontalArrow: (
            <svg width="38" height="12" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.177582 10.3872H34.8224L26.2586 0.785156" stroke="#2B587F" stroke-width="2" />
            </svg>
        ),
    };
    return ICON_DATA && icon[icons];
};
export default ICON_DATA;